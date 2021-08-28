#!/usr/bin/env DENO_DIR=/tmp/.deno deno run --include-files ../util/**/*

import { ServerRequest } from "https://deno.land/std@0.106.0/http/server.ts";

const MODULENAME = "hello";

export default async (req: ServerRequest) => {
  const module = await import(`../util/${MODULENAME}.ts`);
  req.respond({
    body: module(),
  });
  return;
};
