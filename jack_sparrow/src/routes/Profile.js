import React, { useEffect } from "react";
import { authService, dbService } from "myDatabase";
import { useHistory } from "react-router-dom";

export default ({ userObj }) => {
    const history = useHistory();
    const onLogOutClick = () => {
      authService.signOut();
      history.push("/");
    };
    const getMyNweets = async () => {
      const nweets = await dbService
        .collection("jack")
        .where("creatorId", "==", userObj.uid)
        .orderBy("createdAt")
        .get();
      console.log(nweets.docs.map((doc) => doc.data()));
    };
  
    useEffect(() => {
      getMyNweets();
    }, []);
    return (
      <>
        <button onClick={onLogOutClick}>Log Out</button>
      </>
    );
  };