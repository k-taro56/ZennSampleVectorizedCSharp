using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Runtime.Intrinsics;
using System.Runtime.Intrinsics.X86;

namespace ArraySummationBenchmark;

internal class Program
{
    static void Main(string[] args)
    {
        BenchmarkRunner.Run<Benchmark>();
    }
}

public class Benchmark
{
    private int[] data = null!;

    [Params(1, 10, 100, 1000, 10000)]
    public int Length;

    [GlobalSetup]
    public void Setup()
    {
        data = new int[Length];
        new Random(42).NextBytes(MemoryMarshal.AsBytes(data.AsSpan()));
    }

    [Benchmark(Baseline = true)]
    public int General()
    {
        return ArraySummation.Program.Sum(data);
    }

    [Benchmark]
    public int Vectorized()
    {
        return ArraySummation.Program.VectorizedSum(data);
    }

    [Benchmark]
    public int VectorizedIntrinsicHorizontalAdd()
    {
        return VectorizedSum(data);
    }

    public static int VectorizedSum(ReadOnlySpan<int> span)
    {
        nuint index = 0;
        nuint length = (nuint)span.Length;
        int sum = 0;
        ref int reference = ref MemoryMarshal.GetReference(span);

        if (Vector256.IsHardwareAccelerated && (nuint)Vector256<int>.Count <= length)
        {
            nuint oneVectorAwayFromLast = length - (nuint)Vector256<int>.Count;
            Vector256<int> sum256 = Vector256<int>.Zero;

            do
            {
                Vector256<int> vector = Vector256.LoadUnsafe(ref reference, index);
                sum256 += vector;
                index += (nuint)Vector256<int>.Count;
            } while (index <= oneVectorAwayFromLast);

            Vector256<int> permute256 = Avx2.Permute2x128(sum256, sum256, 1);
            Vector256<int> horizontalAdd256 = Avx2.HorizontalAdd(sum256, permute256);
            horizontalAdd256 = Avx2.HorizontalAdd(horizontalAdd256, horizontalAdd256);
            horizontalAdd256 = Avx2.HorizontalAdd(horizontalAdd256, horizontalAdd256);
            sum = horizontalAdd256[0];
        }

        for (; index < length; index++)
        {
            sum += Unsafe.Add(ref reference, index);
        }

        return sum;
    }
}
