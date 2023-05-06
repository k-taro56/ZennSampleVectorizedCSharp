using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Runtime.Intrinsics;

namespace ArraySummation;

public class Program
{
    public static int Sum(ReadOnlySpan<int> span)
    {
        int sum = 0;

        for (int i = 0; i < span.Length; i++)
        {
            sum += span[i];
        }

        return sum;
    }

    public static int VectorizedSum(ReadOnlySpan<int> span)
    {
        // eax
        nuint index = 0;

        // edx = span.Length
        // rdx
        nuint length = (nuint)span.Length;

        // r8d
        int sum = 0;
        // rcx
        ref int reference = ref MemoryMarshal.GetReference(span);

        if (Vector256.IsHardwareAccelerated && (nuint)Vector256<int>.Count <= length)
        {
            // r8
            nuint oneVectorAwayFromLast = length - (nuint)Vector256<int>.Count;
            // ymm0
            Vector256<int> sum256 = Vector256<int>.Zero;

            do
            {
                Vector256<int> vector = Vector256.LoadUnsafe(ref reference, index);
                sum256 += vector;
                index += (nuint)Vector256<int>.Count;
            }
            // index + (nuint)Vector256<int>.Count <= length のままだと毎回足し算を計算してしまう。
            // span.Length - Vector256<int>.Count を変数に用意しておく必要がある。
            while (index <= oneVectorAwayFromLast);

            sum = sum256[0];
            sum += sum256[1];
            sum += sum256[2];
            sum += sum256[3];
            sum += sum256[4];
            sum += sum256[5];
            sum += sum256[6];
            sum += sum256[7];
        }

        for (; index < length; index++)
        {
            // Unsafe クラスを使用しなければ、範囲チェックが入ってしまう。
            sum += Unsafe.Add(ref reference, index);
        }

        return sum;
    }

    static void Main(string[] args)
    {
        Span<int> span = stackalloc int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        Console.WriteLine($"""
            {nameof(Sum)}:           {Sum(span)}
            {nameof(VectorizedSum)}: {VectorizedSum(span)}
            """);
    }
}
