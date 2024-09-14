"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Link,
  Input,
  Button,
  Card,
} from "@nextui-org/react";
import { useGithub } from "../../store/useGithub";

export default function page() {
  const [username, setUsername] = useState("");

  const { users, getUsers, getSingleUser, user } = useGithub();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div>
        <Input
          placeholder="search here"
          value={username}
          onChange={(e) => setUsername(e.target.value) }
          endContent={
            <Button
              onClick={() => {
                getSingleUser(username)
              }}
            >
              🔍
            </Button>
          }
        />
      </div>

      {/* {JSON.stringify(user)} */}

      {
        <div className="flex flex-col items-center gap-3 p-6 ">
          
          <img
            src={user?.avatar_url}
            alt="img"
          />
          <span>{user?.login}</span>
          <span>{user?.followers}</span>
        </div>
      }

      {/* <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>GithubUrl</TableColumn>
          <TableColumn>Link</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map(({ username, avatar_url, url }, idx: any) => {
            return (
              <TableRow key={idx}>
                <TableCell className=" flex flex-row items-center space-x-3  " >
                  <Avatar src={avatar_url} />
                  <h1 className="font-bold capitalize" >{username}</h1>
                </TableCell>
                <TableCell>{url}</TableCell>
                <TableCell>
                <Link color="primary" href={url}>
                {url}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table> */}
    </div>
  );
}
