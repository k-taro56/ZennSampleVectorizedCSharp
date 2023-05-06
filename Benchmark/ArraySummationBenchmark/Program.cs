using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using System.Runtime.InteropServices;

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
}
