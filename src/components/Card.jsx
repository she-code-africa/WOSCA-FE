import React from "react";

export function Card({ title, icon, subtitle, details }) {

  return (
    <div class="card-box">
      <div class="card-title tr">
        <p class="lx-s">Hacktoberfest Online Meetup in La Défense</p>
      </div>
      <p class="ts">2020/10/01 CET</p>
    </div>
  );
}

export function BigCard({ title }) {
  return (
    <div class="card-box-lg">
      <div class="card-title tr">
        <p class="lx-s"> {title}</p>
      </div>
      <p class="lm">5 Tonnes</p>
    </div>
  );
}
