import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";

const useUserList = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const startCountRef = ref(db, "customers");
    onValue(startCountRef, (snapshot) => {
      const data = snapshot.val();
      const customer = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setUsers(customer);
      setLoading(false);
    });
  }, []);
  return { users, loading };
};

export default useUserList;
