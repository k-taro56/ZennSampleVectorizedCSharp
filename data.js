window.BENCHMARK_DATA = {
  "lastUpdate": 1704677413114,
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
          "id": "32b950e6ec0ca331b9d0f13c7a1ce7cfdde265c7",
          "message": "Merge pull request #16 from k-taro56/dependabot/nuget/BenchmarkDotNet-0.13.10\n\nbuild(deps): Bump BenchmarkDotNet from 0.13.9 to 0.13.10",
          "timestamp": "2023-11-02T11:35:17+09:00",
          "tree_id": "19b789a7f0e2604d61cf59df7b33fb1abf5f5aa5",
          "url": "https://github.com/k-taro56/ZennSampleVectorizedCSharp/commit/32b950e6ec0ca331b9d0f13c7a1ce7cfdde265c7"
        },
        "date": 1698892997768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1)",
            "value": 1.7800093500741891,
            "unit": "ns",
            "range": "± 0.04408819907598083"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1)",
            "value": 2.554336082190275,
            "unit": "ns",
            "range": "± 0.07288983728507378"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1)",
            "value": 2.2579041745128303,
            "unit": "ns",
            "range": "± 0.14541482338003306"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1)",
            "value": 2.445433125893275,
            "unit": "ns",
            "range": "± 0.07510184385455591"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10)",
            "value": 6.215914848446846,
            "unit": "ns",
            "range": "± 0.2656668075800024"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10)",
            "value": 5.968966140349706,
            "unit": "ns",
            "range": "± 0.11245512851420207"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10)",
            "value": 4.575150216264384,
            "unit": "ns",
            "range": "± 0.09809425128810902"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10)",
            "value": 7.45920216454112,
            "unit": "ns",
            "range": "± 0.2564729717411986"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 100)",
            "value": 63.93378179470698,
            "unit": "ns",
            "range": "± 1.2543532928407508"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 100)",
            "value": 13.846662880976995,
            "unit": "ns",
            "range": "± 0.2891087797443344"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 100)",
            "value": 11.680642553170522,
            "unit": "ns",
            "range": "± 0.2612701344916194"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 100)",
            "value": 14.92150846272707,
            "unit": "ns",
            "range": "± 0.38529404570200904"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1000)",
            "value": 534.822741317749,
            "unit": "ns",
            "range": "± 8.397607334947914"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1000)",
            "value": 93.37171875579017,
            "unit": "ns",
            "range": "± 1.07266503354687"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1000)",
            "value": 89.97094735304515,
            "unit": "ns",
            "range": "± 1.25717456432469"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1000)",
            "value": 92.07308891614278,
            "unit": "ns",
            "range": "± 1.604236170223842"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10000)",
            "value": 5364.539703914097,
            "unit": "ns",
            "range": "± 71.39366666261866"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10000)",
            "value": 1079.4489504950386,
            "unit": "ns",
            "range": "± 9.751500027189657"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10000)",
            "value": 1061.3774499893188,
            "unit": "ns",
            "range": "± 11.500559943307927"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10000)",
            "value": 1064.137642288208,
            "unit": "ns",
            "range": "± 17.498148251199442"
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
          "id": "a7146b20179c51b8be72d6d33e0743c6ecf126ad",
          "message": "Merge pull request #18 from k-taro56/dependabot/github_actions/actions/setup-dotnet-4\n\nbuild(deps): Bump actions/setup-dotnet from 3 to 4",
          "timestamp": "2023-12-05T17:51:58+09:00",
          "tree_id": "dec2196481197a728a3b2dc116aea97df671b4ff",
          "url": "https://github.com/k-taro56/ZennSampleVectorizedCSharp/commit/a7146b20179c51b8be72d6d33e0743c6ecf126ad"
        },
        "date": 1701766786250,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1)",
            "value": 0.6475183847049872,
            "unit": "ns",
            "range": "± 0.015108363170457113"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1)",
            "value": 1.2681764158109823,
            "unit": "ns",
            "range": "± 0.012419385945166972"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1)",
            "value": 0.9124308815942361,
            "unit": "ns",
            "range": "± 0.003327027440883363"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1)",
            "value": 0.9129385894962719,
            "unit": "ns",
            "range": "± 0.007233452786489489"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10)",
            "value": 3.5028674664596715,
            "unit": "ns",
            "range": "± 0.005394560014362234"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10)",
            "value": 2.968758622614237,
            "unit": "ns",
            "range": "± 0.004636647890503918"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10)",
            "value": 2.3762943578454165,
            "unit": "ns",
            "range": "± 0.017749822624491752"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10)",
            "value": 2.9943406636516254,
            "unit": "ns",
            "range": "± 0.020561710310246367"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 100)",
            "value": 40.605720217738835,
            "unit": "ns",
            "range": "± 0.16437319275784845"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 100)",
            "value": 6.548559215664864,
            "unit": "ns",
            "range": "± 0.1165560895025034"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 100)",
            "value": 6.513091593980789,
            "unit": "ns",
            "range": "± 0.17260631985276026"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 100)",
            "value": 7.4080962916215265,
            "unit": "ns",
            "range": "± 0.13939944826541806"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1000)",
            "value": 342.82892604668933,
            "unit": "ns",
            "range": "± 0.1748221441397637"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1000)",
            "value": 47.15964304904143,
            "unit": "ns",
            "range": "± 0.04209538042797992"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1000)",
            "value": 47.589729045828186,
            "unit": "ns",
            "range": "± 0.016598176148605228"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1000)",
            "value": 47.82929175893466,
            "unit": "ns",
            "range": "± 0.20706273232311326"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10000)",
            "value": 3124.3079277038573,
            "unit": "ns",
            "range": "± 15.952822927983261"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10000)",
            "value": 430.8738563855489,
            "unit": "ns",
            "range": "± 1.8885704417292533"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10000)",
            "value": 403.8558279037476,
            "unit": "ns",
            "range": "± 1.6660590556890278"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10000)",
            "value": 426.75420934813366,
            "unit": "ns",
            "range": "± 0.9430608674011509"
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
          "id": "df8f577cdd816ec18e01bff7aef1f3364ffbac3c",
          "message": "Merge pull request #19 from k-taro56/dependabot/nuget/BenchmarkDotNet-0.13.11\n\nbuild(deps): Bump BenchmarkDotNet from 0.13.10 to 0.13.11",
          "timestamp": "2023-12-12T02:23:01+09:00",
          "tree_id": "77eab9d06d73fbee9054c28097232d0055f2705c",
          "url": "https://github.com/k-taro56/ZennSampleVectorizedCSharp/commit/df8f577cdd816ec18e01bff7aef1f3364ffbac3c"
        },
        "date": 1702315869550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1)",
            "value": 0.9147005029595815,
            "unit": "ns",
            "range": "± 0.008304636821160049"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1)",
            "value": 1.2220576286315918,
            "unit": "ns",
            "range": "± 0.0034888803567791273"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1)",
            "value": 1.25827156512865,
            "unit": "ns",
            "range": "± 0.0017108917940853745"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1)",
            "value": 1.569709241676789,
            "unit": "ns",
            "range": "± 0.004491430698838575"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10)",
            "value": 3.4634731541077297,
            "unit": "ns",
            "range": "± 0.021221889800743823"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10)",
            "value": 2.9594713489596662,
            "unit": "ns",
            "range": "± 0.010716887967751871"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10)",
            "value": 2.7118323711412295,
            "unit": "ns",
            "range": "± 0.0030714780168885404"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10)",
            "value": 3.0870351791381836,
            "unit": "ns",
            "range": "± 0.010519443129447218"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 100)",
            "value": 40.22376745939255,
            "unit": "ns",
            "range": "± 0.17988737955174883"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 100)",
            "value": 7.000251822173595,
            "unit": "ns",
            "range": "± 0.14983847040339857"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 100)",
            "value": 6.157483629309214,
            "unit": "ns",
            "range": "± 0.02410560606754938"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 100)",
            "value": 7.392756236096223,
            "unit": "ns",
            "range": "± 0.018019124181305492"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1000)",
            "value": 340.12177122556244,
            "unit": "ns",
            "range": "± 0.6362149464212212"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1000)",
            "value": 47.61002975702286,
            "unit": "ns",
            "range": "± 0.035036421030699295"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1000)",
            "value": 47.66743326187134,
            "unit": "ns",
            "range": "± 0.0667412992877643"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1000)",
            "value": 48.339851915836334,
            "unit": "ns",
            "range": "± 0.06295961570107567"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10000)",
            "value": 3113.976116997855,
            "unit": "ns",
            "range": "± 3.182782070368962"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10000)",
            "value": 428.5258452342107,
            "unit": "ns",
            "range": "± 0.3210199337052777"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10000)",
            "value": 402.60434583517224,
            "unit": "ns",
            "range": "± 0.37559892060336986"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10000)",
            "value": 426.7038348402296,
            "unit": "ns",
            "range": "± 0.4017840301033313"
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
          "id": "7a646998bb07b86a357378dea38b7f3c2a29d1fa",
          "message": "Merge pull request #20 from k-taro56/dependabot/nuget/BenchmarkDotNet-0.13.12\n\nbuild(deps): Bump BenchmarkDotNet from 0.13.11 to 0.13.12",
          "timestamp": "2024-01-08T10:22:24+09:00",
          "tree_id": "7a0b4d362b08ccad40179272972cd64a71b19050",
          "url": "https://github.com/k-taro56/ZennSampleVectorizedCSharp/commit/7a646998bb07b86a357378dea38b7f3c2a29d1fa"
        },
        "date": 1704677412736,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1)",
            "value": 0.8588714131287166,
            "unit": "ns",
            "range": "± 0.0200280804500915"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1)",
            "value": 1.1864739385743936,
            "unit": "ns",
            "range": "± 0.019021659059049102"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1)",
            "value": 1.2268793042749166,
            "unit": "ns",
            "range": "± 0.028879753050928065"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1)",
            "value": 1.5271750350793203,
            "unit": "ns",
            "range": "± 0.0340392121921932"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10)",
            "value": 3.3540172470467433,
            "unit": "ns",
            "range": "± 0.06778434276403351"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10)",
            "value": 2.877084694802761,
            "unit": "ns",
            "range": "± 0.04087004944920429"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10)",
            "value": 2.604107282559077,
            "unit": "ns",
            "range": "± 0.05726360125940496"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10)",
            "value": 2.945457372566064,
            "unit": "ns",
            "range": "± 0.05837694172448563"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 100)",
            "value": 38.93066364526749,
            "unit": "ns",
            "range": "± 0.35517528968475487"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 100)",
            "value": 6.870897242426873,
            "unit": "ns",
            "range": "± 0.09318845059045537"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 100)",
            "value": 6.221677720546722,
            "unit": "ns",
            "range": "± 0.24674524096575917"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 100)",
            "value": 7.175222072218146,
            "unit": "ns",
            "range": "± 0.13834587128421574"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 1000)",
            "value": 330.8034012158712,
            "unit": "ns",
            "range": "± 3.8544803683488635"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 1000)",
            "value": 46.30961470206579,
            "unit": "ns",
            "range": "± 0.30738872646453785"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 1000)",
            "value": 45.77387708425522,
            "unit": "ns",
            "range": "± 0.4221071131950619"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 1000)",
            "value": 46.067452852215084,
            "unit": "ns",
            "range": "± 0.35234158991518705"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.General(Length: 10000)",
            "value": 2986.638375854492,
            "unit": "ns",
            "range": "± 33.847239941090905"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.Vectorized(Length: 10000)",
            "value": 414.52312953655536,
            "unit": "ns",
            "range": "± 3.5795645796361404"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedIntrinsicHorizontalAdd(Length: 10000)",
            "value": 417.8106649603163,
            "unit": "ns",
            "range": "± 4.208142407124648"
          },
          {
            "name": "ArraySummationBenchmark.Benchmark.VectorizedByteOffset(Length: 10000)",
            "value": 410.37680937449136,
            "unit": "ns",
            "range": "± 2.0854034065874893"
          }
        ]
      }
    ]
  }
}