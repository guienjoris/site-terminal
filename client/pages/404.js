
import React, { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();
  useEffect(() => {
    router.push(`/`);
  }, []);
  return(
      <div></div>
  )
}