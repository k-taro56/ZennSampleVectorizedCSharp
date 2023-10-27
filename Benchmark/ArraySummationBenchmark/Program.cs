// MIT License
// Refer to LICENSE.txt for more information.

// https://zenn.dev/k-taro56/articles/vetcorized-csharp-array-summation

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
        BenchmarkRunner.Run<Benchmark>(null!, args);
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
        return VectorizedIntrinsicHorizontalAdd(data);
    }

     [Benchmark]
    public int VectorizedByteOffset()
    {
        return VectorizedByteOffset(data);
    }
    
    public static int VectorizedIntrinsicHorizontalAdd(ReadOnlySpan<int> span)
    {
        int sum = 0;
        nuint index = 0;
        nuint length = (nuint)span.Length;
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

    public static int VectorizedByteOffset(ReadOnlySpan<int> span)
    {
        int sum = 0;
        nuint byteOffset = 0;
        nuint byteLength = (nuint)span.Length * sizeof(int);
        ref int intReference = ref MemoryMarshal.GetReference(span);
        ref byte byteReference = ref Unsafe.As<int, byte>(ref intReference);

        if (Vector256.IsHardwareAccelerated && (nuint)Vector256<byte>.Count <= byteLength)
        {
            nuint oneVectorAwayFromLast = byteLength - (nuint)Vector256<byte>.Count;
            Vector256<int> sum256 = Vector256<int>.Zero;

            do
            {
                Vector256<byte> vector = Vector256.LoadUnsafe(ref byteReference, byteOffset);
                sum256 += Unsafe.As<Vector256<byte>, Vector256<int>>(ref vector);
                byteOffset += (nuint)Vector256<byte>.Count;
            } while (byteOffset <= oneVectorAwayFromLast);

            sum = sum256[0];
            sum += sum256[1];
            sum += sum256[2];
            sum += sum256[3];
            sum += sum256[4];
            sum += sum256[5];
            sum += sum256[6];
            sum += sum256[7];
        }

        for (; byteOffset < byteLength; byteOffset += sizeof(int))
        {
            sum += Unsafe.AddByteOffset(ref intReference, byteOffset);
        }

        return sum;
    }
}
