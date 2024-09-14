"use client";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
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
  CardHeader,
  CardBody,
  Image,
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
        <Input
        className="w-full m-3 rounded-full bg-white shadow-md"
          placeholder="search github username"
          value={username}
          onChange={(e) => setUsername(e.target.value) }
          endContent={
            <Button
            size="md"
              onClick={() => {
                getSingleUser(username)
              }}
            >
              <LuSearch className="text-gray-400 text-lg " />
            </Button>
          }
        />



    {user ? (
     <div className="h-screen w-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
     <Card className="w-[24rem] bg-white shadow-xl rounded-xl overflow-hidden">
       <div className="relative h-40 bg-gradient-to-r from-blue-500 to-purple-600">
         <Image
           alt="User avatar"
           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white rounded-full object-cover"
           src={user.avatar_url}
           width={120}
           height={120}
         />
       </div>
       <CardBody className="pt-16 px-6 text-center">
         <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
         <p className="text-sm text-gray-500 mb-4">@{user.login}</p>
         <p className="text-gray-600 mb-6">{user.bio}</p>
         <div className="flex justify-center space-x-6 mb-6">
           <div className="text-center">
             <p className="text-2xl font-semibold text-gray-700">{user.followers}</p>
             <p className="text-sm text-gray-500">Followers</p>
           </div>
           <div className="text-center">
             <p className="text-2xl font-semibold text-gray-700">{user.following}</p>
             <p className="text-sm text-gray-500">Following</p>
           </div>
         </div>
         <Button
           className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:opacity-90 transition duration-300"
           onClick={() => window.open(user.html_url, '_blank')}
         >
           View Profile
         </Button>
       </CardBody>
     </Card>
   </div>
    ) : (
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>GithubUrl</TableColumn>
          <TableColumn>Link</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map(({ username, avatar_url, url }, idx) => (
            <TableRow key={idx}>
              <TableCell className="flex flex-row items-center space-x-3">
                <Avatar src={avatar_url} />
                <h1 className="font-bold capitalize">{username}</h1>
              </TableCell>
              <TableCell>{url}</TableCell>
              <TableCell>
                <Link color="primary" href={url}>
                  {url}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )}
  </div>
  );
}
