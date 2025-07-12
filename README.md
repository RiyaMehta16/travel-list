# Getting Started with Create React App


## SUPABASE SETUP


- installation:

```bash
npm install @supabase/supabase-js
```

- utils/supabase.js

```js
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://xyzcompany.supabase.co",
  "public-anon-key"
);
```


### AUTHENTICATION

- Register User

```js
import { supabase } from "../utils/supabaseClient";

const registerUser = async (email, password) => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error("Error Registering User:", error.message);
    return;
  }
};
export default registerUser;
```

- Log In User

  - Create the api for sign up

  ```js
  import { supabase } from "../utils/supabaseClient";

  const signInUser = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Error Signing In:", error.message);
      return;
    }
  };
  export default signInUser;
  ```

  - Create a variable that tracks the session

