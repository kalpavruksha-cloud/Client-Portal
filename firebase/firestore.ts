import { getFirestore } from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app);
```

---

# 16. lib/permissions.ts

```tsx
export const isAdmin = (role: string) => {
  return role === "admin";
};