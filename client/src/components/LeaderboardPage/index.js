import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  TableCaption,
  Spinner,
} from "@chakra-ui/react";
import "./leaderboard.css";
import GameNavBar from "../Navbars/GameNavBar";
import { getLeaderBoardInfo } from "../../store/session";

function Leaderboard() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getLeaderBoardInfo());
    setLoading(false);
  }, [dispatch]);

  const users = useSelector((state) => state.session.users);

  return (
    <div className="box">
      <GameNavBar />
      <Container className="container">
        {loading && (
          <Spinner
            thickness="5px"
            speed="0.5s"
            emptyColor="white"
            color="teal"
            size="xl"
          />
        )}
        <Table className="table" size="lg" variant="striped" colorScheme="teal">
          <TableCaption className="caption" placement="top">
            Top 10 Players
          </TableCaption>
          <Thead>
            <Tr className="tableHeader">
              <Th>USERNAME</Th>
              <Th>GAMES WON</Th>
            </Tr>
          </Thead>
          <Tbody className="tablebody">
            {users.map((user) => (
              <Tr key={user._id}>
                <Td>{user.username}</Td>
                <Td>{user.numOfGameWon}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Leaderboard;
