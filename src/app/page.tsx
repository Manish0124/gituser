"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Link,
} from "@nextui-org/react";
import { useGithub } from "../../store/useGithub";

export default function page() {
  const { users, getUsers } = useGithub();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>GithubUrl</TableColumn>
          <TableColumn>link</TableColumn>
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
      </Table>
    </div>
  );
}
