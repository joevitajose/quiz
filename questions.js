// AboveFL360 — PSR & PET Practice Test
// Question bank (options only — no answer keys stored here)

const QUESTIONS = [
  {
    id: 1,
    text: "What is the distance to the point of safe endurance if an aircraft has a TAS of 300 knots and a safe endurance of 10 hours, if the wind component on the outbound leg is 50 knots headwind?",
    options: ["1458 nm", "1505 nm", "1554 nm", "1625 nm"]
  },
  {
    id: 2,
    text: "What is the time to the point of safe return (PSR) if the distance from A to B is 2368 nautical miles, the outbound groundspeed is 365 knots, the homebound ground speed is 480 knots, and safe endurance is 8 hours 30 minutes?",
    options: ["190 min", "209 min", "219 min", "290 min"]
  },
  {
    id: 3,
    text: "What is the distance from 'Q' to the point of Safe Return (PSR) for an aircraft that was over 'Q' at 1320 hours flying direct to 'R' given the following data? Distance 'Q' to 'R' 3016 nm, True airspeed 480 kt, Safe endurance 10 Hours, mean wind component 'outbound' -90 kt, mean wind component 'homebound' +75 kt.",
    options: ["1320 nm", "1530 nm", "2290 nm", "2375 nm"]
  },
  {
    id: 4,
    text: "What is the distance to B from the equal-time point given the following data? Distance A to B is 360 nm. TAS is 180 kt. Wind component A–B is -15 kt. Wind component B–A is +15 kt.",
    options: ["165 nm", "170 nm", "175 nm", "195 nm"]
  },
  {
    id: 5,
    text: "An aircraft is flying at a TAS of 300 knots over a stretch of water between 2 airfields 500 nm apart. What is the distance from the first airfield to the equal time point (ETP) if the wind component is 60 knots head?",
    options: ["200 nm", "250 nm", "280 nm", "300 nm"]
  },
  {
    id: 6,
    text: "How far can the aeroplane fly out from its base and return in one hour, when flying at TAS 180 kt on a track of 090°, if the W/V is 045°/50kt?",
    options: ["58 nm", "85 nm", "88 nm", "175 nm"]
  },
  {
    id: 7,
    text: "For a distance of 1860 NM between Q and R, a ground speed 'out' of 385 kt, a ground speed 'back' of 465 kt and an endurance of 8 HR (excluding reserves) the distance from Q to the point of safe return (PSR) is?",
    options: ["1685 NM", "1532 NM", "930 NM", "1865 NM"]
  },
  {
    id: 8,
    text: "Two points A and B are 1000 NM apart. TAS = 490 kt. On the flight between A and B the equivalent headwind is -20 kt. On the return leg between B and A, the equivalent tailwind is +40 kt. What distance from A, along the route A to B, is the point of Equal Time (PET)?",
    options: ["470 NM", "455 NM", "500 NM", "530 NM"]
  },
  {
    id: 9,
    text: "An aeroplane is flying at TAS 180 kt on a track of 090°. The W/V is 045°/50kt. How far can the aeroplane fly out from its base and return in one hour?",
    options: ["85 NM", "88 NM", "56 NM", "176 NM"]
  },
  {
    id: 10,
    text: "Given: Distance 'A' to 'B' 2346 NM, Groundspeed 'out' 365 kt, Groundspeed 'back' 480 kt. The time from 'A' to the Point of Equal Time (PET) between 'A' and 'B' is?",
    options: ["167 MIN", "219 MIN", "290 MIN", "197 MIN"]
  },
  {
    id: 11,
    text: "Given: Distance 'A' to 'B' 2346 NM, Groundspeed 'out' 365 kt, Groundspeed 'back' 480 kt. Safe endurance 8 HR 30 MIN. The time from 'A' to the Point of Safe Return (PSR) 'A' is?",
    options: ["290 MIN", "219 MIN", "197 MIN", "209 MIN"]
  },
  {
    id: 12,
    text: "An aircraft was over 'A' at 1435 hours flying direct to 'B'. Given: Distance 'A' to 'B' 2900 NM, True airspeed 470 kt, Mean wind component 'out' +55 kt, Mean wind component 'back' -75 kt. The ETA for reaching the Point of Equal Time (PET) between 'A' and 'B' is?",
    options: ["1744", "1846", "1721", "1657"]
  },
  {
    id: 13,
    text: "An aircraft was over 'A' at 1435 hours flying direct to 'B'. Given: Distance 'A' to 'B' 2900 NM, True airspeed 470 kt, Mean wind component 'out' +55 kt, Mean wind component 'back' -75 kt, Safe endurance 9 HR 30 MIN. The distance from 'A' to the Point of Safe Return (PSR) 'A' is?",
    options: ["2844 NM", "2141 NM", "1611 NM", "1759 NM"]
  },
  {
    id: 14,
    text: "Given: Distance 'A' to 'B' 2484 NM, Groundspeed 'out' 420 kt, Groundspeed 'back' 500 kt. The time from 'A' to the Point of Equal Time (PET) between 'A' and 'B' is?",
    options: ["193 MIN", "163 MIN", "173 MIN", "183 MIN"]
  },
  {
    id: 15,
    text: "Given: Distance 'A' to 'B' 2484 NM, Mean groundspeed 'out' 420 kt, Mean groundspeed 'back' 500 kt. Safe endurance 08 HR 30 MIN. The distance from 'A' to the Point of Safe Return (PSR) 'A' is?",
    options: ["1630 NM", "1940 NM", "1908 NM", "1736 NM"]
  },
  {
    id: 16,
    text: "An aircraft was over 'Q' at 1320 hours flying direct to 'R'. Given: Distance 'Q' to 'R' 3016 NM, True airspeed 480 kt, Mean wind component 'out' -90 kt, Mean wind component 'back' +75 kt, Safe endurance 10:00 HR. The distance from 'Q' to the Point of Safe Return (PSR) 'R' is?",
    options: ["1510 NM", "2290 NM", "2370 NM", "1310 NM"]
  },
  {
    id: 17,
    text: "Given: Distance 'A' to 'B' 1973 NM, Groundspeed 'out' 430 kt, Groundspeed 'back' 385 kt. The time from 'A' to the Point of Equal Time (PET) between 'A' and 'B' is?",
    options: ["130 MIN", "145 MIN", "162 MIN", "181 MIN"]
  },
  {
    id: 18,
    text: "Given: Distance 'A' to 'B' 1973 NM, Groundspeed 'out' 430 kt, Groundspeed 'back' 385 kt. Safe endurance 7 HR 20 MIN. The distance from 'A' to the Point of Safe Return (PSR) 'A' is?",
    options: ["1664 NM", "1698 NM", "1422 NM", "1490 NM"]
  },
  {
    id: 19,
    text: "Given: Distance 'Q' to 'R' 1760 NM, Groundspeed 'out' 435 kt, Groundspeed 'back' 385 kt, Safe endurance 9 HR. The distance from 'Q' to the Point of Safe Return (PSR) between 'Q' and 'R' is?",
    options: ["1467 NM", "1642 NM", "1838 NM", "1313 NM"]
  },
  {
    id: 20,
    text: "Given: Distance 'Q' to 'R' 1760 NM, Groundspeed 'out' 435 kt, Groundspeed 'back' 385 kt. The time from 'Q' to the Point of Equal Time (PET) between 'Q' and 'R' is?",
    options: ["110 MIN", "106 MIN", "102 MIN", "114 MIN"]
  },
  {
    id: 21,
    text: "Given: Distance 'A' to 'B' 3623 NM, Groundspeed 'out' 370 kt, Groundspeed 'back' 300 kt. The time from 'A' to the Point of Equal Time (PET) between 'A' and 'B' is?",
    options: ["238 MIN", "263 MIN", "288 MIN", "323 MIN"]
  },
  {
    id: 22,
    text: "Given: Distance 'Q' to 'R' 2467 NM, Groundspeed 'out' 500 kt, Groundspeed 'back' 400 kt, Safe endurance 9.5 HR. The distance from 'Q' to the Point of Safe Return (PSR) between 'Q' and 'R' is?",
    options: ["2111 NM", "2001 NM", "2175 NM", "2167 NM"]
  },
  {
    id: 23,
    text: "What is the distance to the point of safe endurance if an aircraft has a TAS of 350 knots and a safe endurance of 10 hours, if the wind component on the outbound leg is 50 knots headwind?",
    options: ["1714 nm", "1750 nm", "1754 nm", "1725 nm"]
  },
  {
    id: 24,
    text: "What is the time to the point of safe return (PSR) if the distance from A to B is 3000 nautical miles, the outbound groundspeed is 350 knots, the homebound ground speed is 460 knots, and safe endurance is 8 hours 30 minutes?",
    options: ["209 MIN", "190 MIN", "229 MIN", "290 MIN"]
  },
  {
    id: 25,
    text: "What is the distance to B from the equal-time point given the following data? Distance A to B is 560 nm. TAS is 280 kt. Wind component A–B is -15 kt. Wind component B–A is +15 kt.",
    options: ["265 nm", "270 nm", "275 nm", "280 nm"]
  },
  {
    id: 26,
    text: "An aircraft is flying at a TAS of 500 knots over a stretch of water between 2 airfields 700 nm apart. What is the distance from the first airfield to the equal time point (ETP) if the wind component is 60 knots head?",
    options: ["300 nm", "350 nm", "380 nm", "392 nm"]
  },
  {
    id: 27,
    text: "How far can the aeroplane fly out from its base and return in one hour, when flying at TAS 260 kt on a track of 090°, if the W/V is 045°/50kt?",
    options: ["158 nm", "128 nm", "188 nm", "175 nm"]
  }
];
