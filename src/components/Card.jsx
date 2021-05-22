import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export function Card({ title, icon, subtitle, details }) {
  const classes = useStyles();

  return (
    <div class="card-box">
      <div class="card-title tr">
        <p class="lx-s">Hacktoberfest Online Meetup in La Défense</p>
      </div>
      <p class="lm">La Défense, France</p>
      <hr />
      <p class="ts">2020/10/01 CET</p>
    </div>
  );
}

// export function SmallCard({ title }) {
//   return (
//     <div class="card-box-sm">
//       <div class="card-title tr">
//         <p class="lx-s"> {title}</p>
//       </div>
//       <p class="lm">5 Tonnes</p>
//     </div>
//   );
// }
