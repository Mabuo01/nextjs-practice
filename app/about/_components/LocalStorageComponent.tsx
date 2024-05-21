"use client";

import { useEffect, useState } from "react";

const LocalStorageComponent: React.FC = () => {
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("初回だよ");
    if (typeof window !== "undefined") {
      const value: string | null = localStorage.getItem("myKey");
      setStoredValue(value);
    }
  }, []);

  const saveToLocalStorage = (): void => {
    if (typeof window !== "undefined") {
      const valueToSave: string = "Hello, World!";
      localStorage.setItem("myKey", valueToSave);
      setStoredValue(valueToSave);
    }
  };

  return (
    <div>
      <p>Stored Value: {storedValue}</p>
      <button onClick={saveToLocalStorage}>Save to LocalStorage</button>
      <hr />
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
};

export default LocalStorageComponent;
