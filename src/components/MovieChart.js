import React, { useCallback, useContext, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { SocketContext } from "../context/SocketContext";

export const MovieChart = () => {
  const { socket } = useContext(SocketContext);
  const myChart = useRef();

  const createChart = useCallback(
    (movies = []) => {
      if (typeof myChart.current !== "undefined") myChart.current.destroy();
      const ctx = document.getElementById("myChart");

      myChart.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: movies.map((movie) => movie.name),
          datasets: [
            {
              axis: "y",
              label: "# of Votes",
              data: movies.map((movie) => movie.votes),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          animation: false,
          indexAxis: "y",
        },
      });
    },
    [myChart]
  );

  useEffect(() => {
    socket.on("current-movies", (movies) => {
      createChart(movies);
    });
  }, [socket, createChart]);

  return (
    <div
      style={{
        width: "80vw",
        height: "50vh",
        position: "relative",
        margin: "auto",
      }}
    >
      <canvas id="myChart"></canvas>
    </div>
  );
};
