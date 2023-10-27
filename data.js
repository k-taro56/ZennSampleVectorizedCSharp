window.BENCHMARK_DATA = {
  "lastUpdate": 1698417793213,
  "repoUrl": "https://github.com/k-taro56/ZennSampleVectorizedCSharp",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "121674121+k-taro56@users.noreply.github.com",
            "name": "k-taro56",
            "username": "k-taro56"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f3f4ea2c22cb0c59bf49c20489505c1d319659a",
          "message": "Merge pull request #13 from k-taro56/fix/output-file-path\n\nfix output-file-path",
          "timestamp": "2023-10-27T23:13:41+09:00",
          "tree_id": "966fa64a6f313e89fad3b2f81afd8a5982edbe11",
          "url": "https://github.com/k-taro56/ZennSampleVectorizedCSharp/commit/9f3f4ea2c22cb0c59bf49c20489505c1d319659a"
        },
        "date": 1698416483935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1)",
            "value": 1.4316578763226668,
            "unit": "ns",
            "range": "± 0.01321875678993024"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1)",
            "value": 2.0589202135801314,
            "unit": "ns",
            "range": "± 0.008120332957986"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1)",
            "value": 2.13446200213262,
            "unit": "ns",
            "range": "± 0.002906715206192756"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1)",
            "value": 2.3621626014510793,
            "unit": "ns",
            "range": "± 0.006686799977017174"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10)",
            "value": 5.452695988615354,
            "unit": "ns",
            "range": "± 0.06490507144198873"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10)",
            "value": 4.546077288114107,
            "unit": "ns",
            "range": "± 0.0027906502257468734"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10)",
            "value": 3.4023982525936196,
            "unit": "ns",
            "range": "± 0.003163843389038889"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10)",
            "value": 5.08559177549822,
            "unit": "ns",
            "range": "± 0.015626933350542493"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 100)",
            "value": 53.8991106237684,
            "unit": "ns",
            "range": "± 0.04822829623713728"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 100)",
            "value": 11.385984911368443,
            "unit": "ns",
            "range": "± 0.0020440815957514704"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 100)",
            "value": 9.01627930360181,
            "unit": "ns",
            "range": "± 0.009714700031616912"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 100)",
            "value": 10.112911935363497,
            "unit": "ns",
            "range": "± 0.009929764367916896"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1000)",
            "value": 449.4655340058463,
            "unit": "ns",
            "range": "± 0.06457112282877252"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1000)",
            "value": 63.726272974695476,
            "unit": "ns",
            "range": "± 0.02003903020980335"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1000)",
            "value": 65.2859760204951,
            "unit": "ns",
            "range": "± 0.18682866458270747"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1000)",
            "value": 65.7274154653916,
            "unit": "ns",
            "range": "± 0.1951407408191527"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10000)",
            "value": 3912.559841700963,
            "unit": "ns",
            "range": "± 53.75407364987245"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10000)",
            "value": 575.4874220628005,
            "unit": "ns",
            "range": "± 0.2691780808531331"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10000)",
            "value": 571.7992698124477,
            "unit": "ns",
            "range": "± 0.3481797559649644"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10000)",
            "value": 558.4667410850525,
            "unit": "ns",
            "range": "± 0.4306135204847305"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "121674121+k-taro56@users.noreply.github.com",
            "name": "k-taro56",
            "username": "k-taro56"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35a23fd54ac10f08bc2c89b96924a9148447fbfd",
          "message": "Merge pull request #15 from k-taro56/revert-11-feature/add-list-directory\n\nRevert \"List directory contents\"",
          "timestamp": "2023-10-27T23:35:45+09:00",
          "tree_id": "a4aabb7ae69716e792f2b5527f02102f821f114b",
          "url": "https://github.com/k-taro56/ZennSampleVectorizedCSharp/commit/35a23fd54ac10f08bc2c89b96924a9148447fbfd"
        },
        "date": 1698417792730,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1)",
            "value": 1.830171817115375,
            "unit": "ns",
            "range": "± 0.00659276157937093"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1)",
            "value": 1.988208140891332,
            "unit": "ns",
            "range": "± 0.002788732881798504"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1)",
            "value": 1.8359311930835247,
            "unit": "ns",
            "range": "± 0.001789527562381378"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1)",
            "value": 1.847859187424183,
            "unit": "ns",
            "range": "± 0.0018947600340065006"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10)",
            "value": 5.801680908848842,
            "unit": "ns",
            "range": "± 0.003595526895901974"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10)",
            "value": 4.632499442994595,
            "unit": "ns",
            "range": "± 0.0007670820277576106"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10)",
            "value": 3.507738873362541,
            "unit": "ns",
            "range": "± 0.016478735724537848"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10)",
            "value": 5.45092134475708,
            "unit": "ns",
            "range": "± 0.019357121319471062"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 100)",
            "value": 54.02688255707423,
            "unit": "ns",
            "range": "± 0.017086462096751003"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 100)",
            "value": 10.93107372735228,
            "unit": "ns",
            "range": "± 0.0016099081819075604"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 100)",
            "value": 10.530365841729301,
            "unit": "ns",
            "range": "± 0.0034333672536296044"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 100)",
            "value": 11.325670986374218,
            "unit": "ns",
            "range": "± 0.005679279531370514"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1000)",
            "value": 594.3783533232553,
            "unit": "ns",
            "range": "± 0.20463523648824916"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1000)",
            "value": 76.53125319310597,
            "unit": "ns",
            "range": "± 0.03583812401509546"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1000)",
            "value": 71.77757900101798,
            "unit": "ns",
            "range": "± 0.04515207943730833"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1000)",
            "value": 71.07726190884908,
            "unit": "ns",
            "range": "± 0.03154504672082356"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10000)",
            "value": 5847.694380442302,
            "unit": "ns",
            "range": "± 0.7715451054752686"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10000)",
            "value": 755.8032135596642,
            "unit": "ns",
            "range": "± 0.24524627438868812"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10000)",
            "value": 751.455512046814,
            "unit": "ns",
            "range": "± 0.22925741839994526"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10000)",
            "value": 700.65453345435,
            "unit": "ns",
            "range": "± 0.20308904014569978"
          }
        ]
      }
    ]
  }
}