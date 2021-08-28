This is a reproduction for [TooTallNate/vercel-deno/issues/79](https://github.com/TooTallNate/vercel-deno/issues/79)

Upon deploying the only API function [`main.ts`](https://github.com/5310/issue_vercel-deno_dynamic-imports/blob/main/api/main.ts) with a dynamic import, the function fails with [error 500](https://issue-vercel-deno-dynamic-imports-475drdg7o-scio.vercel.app/api/main) and the following log:
```
Check file:///var/task/util/hello.ts
Invoke Error: TypeError: Could not create TypeScript compiler cache location: "/var/task/.deno/gen/file/var/task/util"
Check the permission of the directory.
at async default (file:///var/task/api/main.ts:8:18)
at async processEvents (file:///var/task/.runtime.ts:64:16)
```

The dynamic module being imported has been included with the deployment with the `--include-files` option.

Since the default `DENO_DIR` `/var/task/.deno/gen/file/var/task/util` is read-only, the main function has a hashbang that aims to set the `DENO_DIR` to `/tmp/.deno`, which has no effect.

The Vercel deployment also has `DENO_DIR` set as a environment variable to no effect.