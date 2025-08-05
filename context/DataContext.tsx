import React, { createContext, ReactNode, useState } from "react";
import { Post, User } from "../types/types";

interface DataContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  // products: Product[];
  // setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  // const [products, setProducts] = useState<Product[]>([]);

  return (
    <DataContext.Provider value={{ posts, setPosts, users, setUsers}}>
      {children}
    </DataContext.Provider>
  );
};
