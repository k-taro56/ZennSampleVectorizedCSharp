window.BENCHMARK_DATA = {
  "lastUpdate": 1698416484557,
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
      }
    ]
  }
}