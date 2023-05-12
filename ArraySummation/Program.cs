// MIT License
// Refer to LICENSE.txt for more information.

// https://zenn.dev/k-taro56/articles/vetcorized-csharp-array-summation

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
        int sum = 0;

        // edx
        nuint index = 0;

        // r8d = span.Length
        // r8
        nuint length = (nuint)span.Length;

        // rcx
        ref int reference = ref MemoryMarshal.GetReference(span);

        if (Vector256.IsHardwareAccelerated && (nuint)Vector256<int>.Count <= length)
        {
            // rax
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

            // スカラー値に変換。
            // 組み込み関数を使うよりも高速。

            Vector128<int> sum256upper = sum256.GetUpper();

            // 複合代入ではなく、ただの代入に最適化される。
            sum += sum256upper[0];
            sum += sum256upper[1];
            sum += sum256upper[2];
            sum += sum256upper[3];

            Vector128<int> sum256lower = sum256.GetLower();

            sum += sum256lower[0];
            sum += sum256lower[1];
            sum += sum256lower[2];
            sum += sum256lower[3];
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
