// axios : 써드 파티 라이브러리

import axios from "axios";

async function get() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(response.data);
}

get();
