// debugger;

// Variables
let periodDisplay = document.getElementById("period-display");
let timerDisplay = document.getElementById("timer-display");
let testingButton = document.getElementById("testing-toggle");
let gradeButton = document.getElementById("grade");

function mobileCheck() 
{
  return screen.width < screen.height;
};

let settings = 
{
  schedule: 1,
  darkMode: 1,
  grade: 0,
  flipped: false,
  shifting: false,
  lang: 0,
  textColor: 0,
  paused: false,
  customSchedule: {},
  useCustomSchedule: false,
};

const scheduleData = {
  times: {
    normal: [
              [// Start    End
                "07:50", "08:15", // AB 6
                "08:18", "09:00", // P1 6
                "09:03", "09:45", // P2 6
                "09:48", "10:30", // P3 6
                "10:33", "11:15", // P4 6
             /*Teleport*/"11:45", // Lu 6
                "11:48", "12:30", // P5 6
                "12:33", "13:15", // P6 6
                "13:18", "14:00", // P7 6
                "14:03", "14:45", // P8 6
              ],
              [// Start    End
                "07:50", "08:15", // AB 7
                "08:18", "09:00", // P1 7
                "09:03", "09:45", // P2 7
                "09:48", "10:30", // P3 7
                "10:33", "11:15", // P4 7
                "11:18", "12:00", // P5 7
             /*Teleport*/"12:30", // Lu 7
                "12:33", "13:15", // P6 7
                "13:18", "14:00", // P7 7
                "14:03", "14:45", // P8 7
              ],
              [// Start    End
                "07:50", "08:15", // AB 8
                "08:18", "09:00", // P1 8
                "09:03", "09:45", // P2 8
                "09:48", "10:30", // P3 8
                "10:33", "11:15", // P4 8
                "11:18", "12:00", // P5 8
                "12:03", "12:45", // P6 8
             /*Teleport*/"13:15", // Lu 8
                "13:18", "14:00", // P7 8
                "14:03", "14:45", // P8 8
              ],
              {
                monday: [// Start, End
                  "07:55", "08:42", // P1 1 THS
                  "08:47", "09:34", // P2 1 THS
                  "09:39", "10:26", // P3 1 THS
                  "10:31", "11:02", // TT 1 THS
                  "11:07", "11:54", // P4 1 THS
               /*Teleport*/"12:24", // Lu 1 THS
                  "12:29", "13:16", // P5 1 THS
                  "13:21", "14:08", // P6 1 THS
                  "14:13", "15:00", // P7 1 THS
                ],
                tuesday: [// Start, End
                  "07:55", "09:30", // P1/2 1 THS BLOCK
                  "09:35", "10:22", // P3   1 THS BLOCK
                  "10:27", "11:10", // TrTi 1 THS BLOCK
               /*Teleport*/"11:40", // Lunc 1 THS BLOCK
                  "11:45", "13:20", // P4/5 1 THS BLOCK
                  "13:25", "15:00", // P6/7 1 THS BLOCK
                ],
                wednesday: [// Start, End
                  "07:55", "09:30", // P1/2 1 THS BLOCK
                  "09:35", "10:22", // P3   1 THS BLOCK
                  "10:27", "11:10", // TrTi 1 THS BLOCK
               /*Teleport*/"11:40", // Lunc 1 THS BLOCK
                  "11:45", "13:20", // P4/5 1 THS BLOCK
                  "13:25", "15:00", // P6/7 1 THS BLOCK
                ],
                thursday: [// Start, End
                  "07:55", "09:30", // P1/2 1 THS BLOCK
                  "09:35", "10:22", // P3   1 THS BLOCK
                  "10:27", "11:10", // TrTi 1 THS BLOCK
               /*Teleport*/"11:40", // Lunc 1 THS BLOCK
                  "11:45", "13:20", // P4/5 1 THS BLOCK
                  "13:25", "15:00", // P6/7 1 THS BLOCK
                ],
                friday: [// Start, End
                  "07:55", "09:30", // P1/2 1 THS BLOCK
                  "09:35", "10:22", // P3   1 THS BLOCK
                  "10:27", "11:10", // TrTi 1 THS BLOCK
               /*Teleport*/"11:40", // Lunc 1 THS BLOCK
                  "11:45", "13:20", // P4/5 1 THS BLOCK
                  "13:25", "15:00", // P6/7 1 THS BLOCK
                ],
              },
              {
                monday: [// Start, End
                  "07:55", "08:42", // P1 2 THS
                  "08:47", "09:34", // P2 2 THS
                  "09:39", "10:26", // P3 2 THS
                  "10:31", "11:02", // TT 2 THS
                  "11:07", "11:54", // P4 2 THS
                  "11:59", "12:46", // P5 2 THS
              /*Teleport*/"13:16", // Lu 2 THS
                  "13:21", "14:08", // P6 2 THS
                  "14:13", "15:00", // P7 2 THS
                ],
                tuesday: [// Start, End
                  "07:55", "09:30", // P1/2 2 THS BLOCK
                  "09:35", "10:22", // P3   2 THS BLOCK
                  "10:27", "11:10", // TrTi 2 THS BLOCK
                  "11:15", "12:50", // P4/5 2 THS BLOCK
              /*Teleport*/"13:20", // Lunc 2 THS BLOCK
                  "13:25", "15:00", // P6/7 2 THS BLOCK
                ],
                wednesday: [// Start, End
                  "07:55", "09:30", // P1/2 2 THS BLOCK
                  "09:35", "10:22", // P3   2 THS BLOCK
                  "10:27", "11:10", // TrTi 2 THS BLOCK
                  "11:15", "12:50", // P4/5 2 THS BLOCK
              /*Teleport*/"13:20", // Lunc 2 THS BLOCK
                  "13:25", "15:00", // P6/7 2 THS BLOCK
                ],
                thursday: [// Start, End
                  "07:55", "09:30", // P1/2 2 THS BLOCK
                  "09:35", "10:22", // P3   2 THS BLOCK
                  "10:27", "11:10", // TrTi 2 THS BLOCK
                  "11:15", "12:50", // P4/5 2 THS BLOCK
              /*Teleport*/"13:20", // Lunc 2 THS BLOCK
                  "13:25", "15:00", // P6/7 2 THS BLOCK
                ],
                friday: [// Start, End
                  "07:55", "09:30", // P1/2 2 THS BLOCK
                  "09:35", "10:22", // P3   2 THS BLOCK
                  "10:27", "11:10", // TrTi 2 THS BLOCK
                  "11:15", "12:50", // P4/5 2 THS BLOCK
              /*Teleport*/"13:20", // Lunc 2 THS BLOCK
                  "13:25", "15:00", // P6/7 2 THS BLOCK
                ],
              }
            ],
    test:   [
              [// Start    End
                "07:50", "09:35", // AB 6
                "09:38", "10:10", // P1 6
                "10:13", "10:45", // P2 6
                "10:48", "11:20", // P3 6
             /*Teleport*/"11:50", // Lu 6
                "11:53", "12:25", // P4 6
                "12:28", "13:00", // P5 6
                "13:03", "13:35", // P6 6
                "13:38", "14:10", // P7 6
                "14:13", "14:45", // P8 6
              ],
              [// Start    End
                "07:50", "09:35", // AB 7
                "09:38", "10:10", // P1 7
                "10:13", "10:45", // P2 7
                "10:48", "11:20", // P3 7
                "11:23", "11:55", // P4 7
             /*Teleport*/"12:25", // Lu 7
                "12:28", "13:00", // P5 7
                "13:03", "13:35", // P6 7
                "13:38", "14:10", // P7 7
                "14:13", "14:45", // P8 7
              ],
              [// Start    End
                "07:50", "09:35", // AB 8
                "09:38", "10:10", // P1 8
                "10:13", "10:45", // P2 8
                "10:48", "11:20", // P3 8
                "11:23", "11:55", // P4 8
                "11:58", "12:30", // P5 8
             /*Teleport*/"13:00", // Lu 8
                "13:03", "13:35", // P6 8
                "13:38", "14:10", // P7 8
                "14:13", "14:45", // P8 8
              ]
            ],
  assembly: [
              [// Start    End
                "07:50", "08:55", // AB 6
                "08:58", "09:35", // P1 6
                "09:38", "10:15", // P2 6
                "10:18", "10:55", // P3 6
                "10:58", "11:35", // P4 6
             /*Teleport*/"12:05", // Lu 6
                "12:08", "12:45", // P5 6
                "12:48", "13:25", // P6 6
                "13:28", "14:05", // P7 6
                "14:08", "14:45", // P8 6
              ],
              [// Start    End
                "07:50", "08:27", // P1 7
                "08:30", "09:07", // P2 7
                "09:10", "10:15", // AB 7
                "10:18", "10:55", // P3 7
                "10:58", "11:35", // P4 7
                "11:38", "12:15", // P5 7
             /*Teleport*/"12:45", // Lu 7
                "12:48", "13:25", // P6 7
                "13:28", "14:05", // P7 7
                "14:08", "14:45", // P8 7
              ],
              [// Start    End
                "07:50", "08:27", // P1 8
                "08:30", "09:07", // P2 8
                "09:10", "09:47", // P3 8
                "09:50", "10:27", // P4 8
                "10:30", "11:35", // AB 8
                "11:38", "12:15", // P5 8
                "12:18", "12:55", // P6 8
             /*Teleport*/"13:25", // Lu 8
                "13:28", "14:05", // P7 8
                "14:08", "14:45", // P8 8
              ]
            ]
         },
  names: {
    normal: [
              [ // 6
                ["AB", "BC", "BC"],
                ["AB-1"],
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-2", "1-2", "1-2"],
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-3", "2-3", "2-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["3-4", "3-4", "3-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-5", "Almuerzo-5", "Déjeuner-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["5-6", "5-6", "5-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["6-7", "6-7", "6-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ["7-8", "7-8", "7-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"]
              ],
              [ // 7
                ["AB", "BC", "BC"],
                ["AB-1"],
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-2", "1-2", "1-2"],
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-3", "2-3", "2-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["3-4", "3-4", "3-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["4-5", "4-5", "4-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-6", "Almuerzo-6", "Déjeuner-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["6-7", "6-7", "6-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ["7-8", "7-8", "7-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"]
              ],
              [ // 8
                ["AB", "BC", "BC"],
                ["AB-1"],
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-2", "1-2", "1-2"],
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-3", "2-3", "2-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["3-4", "3-4", "3-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["4-5", "4-5", "4-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["5-6", "5-6", "5-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-7", "Almuerzo-7", "Déjeuner-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ["7-8", "7-8", "7-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"]
              ],
              {
                monday: [ // THS 1
                  ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                  ["1-2", "1-2", "1-2"],
                  ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                  ["2-3", "2-3", "2-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["3-TT", "3-TT", "3-TT"],
                  ["Tro. Time", "Tiem. Tro.", "Tem. Tro."],
                  ["TT-4", "TT-4", "TT-4"],
                  ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-5", "Almuerzo-5", "Déjeuner-5"],
                  ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                  ["5-6", "5-6", "5-6"],
                  ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                  ["6-7", "6-7", "6-7"],
                  ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ],
                tuesday: [ // THS 1 EVEN BLOCK
                  ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                  ["2-3", "2-3", "2-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["3-TT", "3-TT", "3-TT"],
                  ["Tro. Time", "Tro. Time", "Tro. Time"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-4", "Almuerzo-4", "Déjeuner-4"],
                  ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                  ["4-6", "4-6", "4-6"],
                  ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ],
                wednesday: [ // THS 1 ODD BLOCK
                  ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>e</sup> cours"],
                  ["1-3", "1-3", "1-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["3-Tro. Time", "3-Tiem. Tro.", "3-Tem. Tro."],
                  ["Tro. Time", "Tro. Time", "Tro. Time"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-5", "Almuerzo-5", "Déjeuner-5"],
                  ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                  ["5-7", "5-7", "5-7"],
                  ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ],
                thursday: [ // THS 1 EVEN BLOCK
                  ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                  ["2-3", "2-3", "2-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["3-Tro. Time", "3-Tiem. Tro.", "3-Tem. Tro."],
                  ["Tro. Time", "Tro. Time", "Tro. Time"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-4", "Almuerzo-4", "Déjeuner-4"],
                  ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                  ["4-6", "4-6", "4-6"],
                  ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ],
                friday: [ // THS 1 ODD BLOCK
                  ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                  ["1-Tro. Time", "1-Tiem. Tro.", "1-Tem. Tro."],
                  ["Tro. Time", "Tiem. Tro.", "Tem. Tro."],
                  ["Tro. Time-3", "Tiem. Tro.-3", "Tem. Tro.-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-5", "Almuerzo-5", "Déjeuner-5"],
                  ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                  ["5-7", "5-7", "5-7"],
                  ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ]
              },
              {
                monday: [ // THS 2
                  ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                  ["1-2", "1-2", "1-2"],
                  ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                  ["2-3", "2-3", "2-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["3-TT", "3-TT", "3-TT"],
                  ["Tro. Time", "Tiem. Tro.", "Tem. Tro."],
                  ["TT-4", "TT-4", "TT-4"],
                  ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                  ["4-5", "4-5", "4-5"],
                  ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-6", "Almuerzo-6", "Déjeuner-6"],
                  ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                  ["6-7", "6-7", "6-7"],
                  ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ],
                tuesday: [ // THS 2 EVEN BLOCK
                  ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                  ["2-3", "2-3", "2-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["3-TT", "3-TT", "3-TT"],
                  ["Tro. Time", "Tro. Time", "Tro. Time"],
                  ["TT-4", "TT-4", "TT-4"],
                  ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-6", "Almuerzo-6", "Déjeuner-6"],
                  ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ],
                wednesday: [ // THS 2 ODD BLOCK
                  ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>e</sup> cours"],
                  ["1-3", "1-3", "1-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["3-Tro. Time", "3-Tiem. Tro.", "3-Tem. Tro."],
                  ["Tro. Time", "Tro. Time", "Tro. Time"],
                  ["TT-5", "TT-5", "TT-5"],
                  ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-7", "Almuerzo-7", "Déjeuner-7"],
                  ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ],
                thursday: [ // THS 2 EVEN BLOCK
                  ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                  ["2-3", "2-3", "2-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["3-TT", "3-TT", "3-TT"],
                  ["Tro. Time", "Tro. Time", "Tro. Time"],
                  ["TT-4", "TT-4", "TT-4"],
                  ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-6", "Almuerzo-6", "Déjeuner-6"],
                  ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ],
                friday: [ // THS 2 ODD BLOCK
                  ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>e</sup> cours"],
                  ["1-3", "1-3", "1-3"],
                  ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                  ["3-Tro. Time", "3-Tiem. Tro.", "3-Tem. Tro."],
                  ["Tro. Time", "Tro. Time", "Tro. Time"],
                  ["TT-5", "TT-5", "TT-5"],
                  ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                  ["Lunch", "Almuerzo", "Déjeuner"],
                  ["Lunch-7", "Almuerzo-7", "Déjeuner-7"],
                  ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ]
              },
            ],
    test:   [
              [ // 6
                ["AB", "BC", "BC"],
                ["AB-1"],
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-2", "1-2", "1-2"],
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-3", "2-3", "2-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-4", "Almuerzo-4", "Déjeuner-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["4-5", "4-5", "4-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["5-6", "5-6", "5-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["6-7", "6-7", "6-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ["7-8", "7-8", "7-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"]
            ],
            [ // 7
                ["AB", "BC", "BC"],
                ["AB-1"],
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-2", "1-2", "1-2"],
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-3", "2-3", "2-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["3-4", "3-4", "3-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-5", "Almuerzo-5", "Déjeuner-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["5-6", "5-6", "5-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["6-7", "6-7", "6-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ["7-8", "7-8", "7-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"]
            ],
            [ // 8
                ["AB", "BC", "BC"],
                ["AB-1"],
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-2", "1-2", "1-2"],
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-3", "2-3", "2-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["3-4", "3-4", "3-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["4-5", "4-5", "4-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-6", "Almuerzo-6", "Déjeuner-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["6-7", "6-7", "6-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ["7-8", "7-8", "7-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"]
              ]
            ],
  assembly: [
              [ // 6
                ["Assembly", "Reunión", "Réunion"],
                ["Ass.-1"],
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-2", "1-2", "1-2"],
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-3", "2-3", "2-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["3-4", "3-4", "3-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-5", "Almuerzo-5", "Déjeuner-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["5-6", "5-6", "5-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["6-7", "6-7", "6-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ["7-8", "7-8", "7-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"]
              ],
              [ // 7
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-2", "1-2", "1-2"],
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-Ass.", "2-Reu.", "2-Réu."],
                ["Assembly", "Reunión", "Réunion"],
                ["Ass.-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["3-4", "3-4", "3-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["4-5", "4-5", "4-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-6", "Almuerzo-6", "Déjeuner-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["6-7", "6-7", "6-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ["7-8", "7-8", "7-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"]
              ],
              [ // 8
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-2", "1-2", "1-2"],
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-3", "2-3", "2-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["3-4", "3-4", "3-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["4-Ass.", "4-Reu.", "4-Réu."],
                ["Assembly", "Reunión", "Réunion"],
                ["Ass.-5", "Reu.-5", "Réu.-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["5-6", "5-6", "5-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-7", "Almuerzo-7", "Déjeuner-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
                ["7-8", "7-8", "7-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"]
              ]
            ]
          },
  passing: {
    normal: [
      [1, 3, 5, 7, 10, 12, 14, 16], // 6th grade
      [1, 3, 5, 7,  9, 12, 14, 16], // 7th grade
      [1, 3, 5, 7,  9, 11, 14, 16], // 8th grade
      [1, 3, 5, 8, 10, 12, 14], // THS 1st lunch
      [1, 3, 5, 7, 10, 12, 14], // THS 2nd lunch
      [1, 3, 6, 8], // THS 1st lunch BLOCK SCHED
      [1, 3, 5, 8], // THS 2nd lunch BLOCK SCHED
    ],
    test: [
      [1, 3, 5, 8, 10, 12, 14, 16], // 6th grade
      [1, 3, 5, 7, 10, 12, 14, 16], // 7th grade
      [1, 3, 5, 7,  9, 12, 14, 16], // 8th grade
    ],
    assembly: [
 // if you want this data you can go die in a hole
    ]
  }
};

let font_num = 0;

const mainModule = 
{
  /**
   * 
   * @param {object} object 
   * @returns {void}
   */
  setSettings(object)
  {
    settings = object;
  },
  /**
   * 
   * @param {string} id The ID of the element you want to set the insides of.
   * @param {string} content The insides to be the new insides.
   * @returns {void}
   */
  setElementInsides(id, content)
  {
    document.getElementById(id).innerHTML = content;
  },
  /**
   * 
   * @param {string} id The ID of the element you want to glow up.
   * @param {string} property The way you want to glow it up.
   * @param {string} content How you will glow it up.
   */
  setStyleInfo(id, property, content)
  {
    document.getElementById(id).style[property] = content;
  },
  /**
   * @returns {object} the settings
  */
  getSettings()
  {
    return settings;
  },
  /**
   * 
   * @param {string} id The ID of the element you want to set the insides of.
   * @returns {string} The insides of the element.
  */
  getElementInsides(id)
  {
    return document.getElementById(id).innerHTML;
  },
  /**
   * @returns {void}
  */
  updateTimer()
  {
    doTimerControl();
  },
  australian()
  {
    periodDisplay.classList.toggle("flip");
    timerDisplay.classList.toggle("flip");
    testingButton.classList.toggle("flip");
    gradeButton.classList.toggle("flip");
    document.getElementById("credits").classList.toggle("flip");
    document.getElementById("bgimg").classList.toggle("flip");
    document.getElementById("hotkey-button").classList.toggle("flip");
    document.getElementById("hotkey-screen").classList.toggle("flip");
  },
  setBackgroundColor()
  {
    window["background-color"].click();
    window["background-color"].oninput = function(e)
    {
      document.body.style.backgroundColor = window["background-color"].value;
    };
    settings.darkMode = 4;
  }
};

// Constants
const fonts = ["Helvetica", "Georgia", "Cursive", "Verdana", "Consolas Cousine monospace"];
const testOffset = (0); // forward offset in hours

const lang = [
  {//English
      gr6sched: "RMS 6",
      gr7sched: "RMS 7",
      gr8sched: "RMS 8",
      ths1: "THS 1st lunch",
      ths2: "THS 2nd lunch",
      paused: "Paused",
      dark: "Dark Mode",
      light: "Light Mode",
      colors: "COLORS",
      ytest: "Testing",
      ntest: "Normal",
      learnt: "Learn't",
      loading: "Loading...",
      ussa: " until school starts again",
      summer: "Summer!",
      dwtd: "% done with the day",
      dwtc: "% done with class",
      assembly: "Assembly",
  },
  {//Spanish
      gr6sched: "EMR 6",
      gr7sched: "EMR 7",
      gr8sched: "EMR 8",
      ths1: "EST 1er almuerzo",
      ths2: "EST 2do almuerzo", 
      paused: "Pausado",
      dark: "Modo oscuro",
      light: "Modo claro",
      colors: "COLORES",
      ytest: "Evaluando",
      ntest: "Normal",
      learnt: "No escuela",
      loading: "Cargando...",
      ussa: " hasta que la escuela empiece",
      summer: "¡Verano!",
      dwtd: "% del día ha pasado",
      dwtc: "% de la clase ha pasado",
      assembly: "Reunión",
  },
  {//French
      gr6sched: "CR 6",
      gr7sched: "CR 5",
      gr8sched: "CR 4",
      ths1: "LT 1re déjeuner",
      ths2: "LT 2de déjeuner",
      paused: "Arrêté",
      dark: "Mode foncé",
      light: "Mode claire",
      colors: "COULEURS",
      ytest: "En train d'interroger",
      ntest: "Normal",
      learnt: "Pas de l'école",
      loading: "En chargeant...",
      ussa: " jusqu'à ce que l'école commence",
      summer: "Été !",
      dwtd: " % du jour a passé",
      assembly: "Réunion",
  }
];

const color = {
  toHue(color_code)
  {
    color_code = Math.round(color_code);
    let r;
    let g;
    let b;
    const stage = Math.floor(color_code / 255);
    const theWayThrough = color_code % 255;
    switch(stage)
    {
      case 0:
        r = 255;
        g = theWayThrough;
        b = 0;
        break;
      case 1:
        r = 255-theWayThrough;
        g = 255;
        b = 0;
        break;
      case 2:
        r = 0;
        g = 255;
        b = theWayThrough;
        break;
      case 3:
        r = 0;
        g = 255-theWayThrough;
        b = 255;
        break;
      case 4:
        r = theWayThrough;
        g = 0;
        b = 255;
        break;
      case 5:
        r = 255;
        g = 0;
        b = 255-theWayThrough;
        break;
      default:
        console.log("Something went wrong.");
    }
    return `rgb(${r}, ${g}, ${b})`;
  },
  decimalToColor(dec)
  {
    return dec*1530;
  }
};

const keys = {
  handleKeyUp(e)
  {
    let code = e.code;
    
    let settings = mainModule.getSettings();

    let elem;
    switch (code)
    {
      case "Digit6": // set to 6th grade schedule
      settings.grade = 0;
        break;
      case "Digit7": // set to 7th grade schedule
        settings.grade = 1;
        break;
      case "Digit8": // set to 8th grade schedule
      settings.grade = 2;
      break;
      case "Digit9": // set to THS 1st lunch schedule
      settings.grade = 3;
        break;
        case "Digit0": // set to THS 2nd lunch schedule
        settings.grade = 4;
        break;
      case "KeyA": // australian mode
      mainModule.australian();
        break;
      case "KeyB": // change background color
        mainModule.setBackgroundColor();
        break;
      case "KeyC": // change text color; cycle between white, black and opposite
        userStyling.textColorChange();
        break;
      case "KeyE": // remove background image
      elem = document.createElement("img");
        window.document.getElementById("bgimg").remove();
        window.document.body.appendChild(elem);
        update("dark mode");
        elem.id = "bgimg";
        elem.style.display = "none";
        elem.alt = "background image";
        break;
        case "KeyF": // change font
        userStyling.cycleFonts();
        break;
      case "KeyI": // open image for background
      if(!settings.shifting)
          {
          document.getElementsByTagName("input")[0].click();
          document.getElementById("bgimg").style.display = "block";
        }
        break;
        case "KeyL": // language change
        userStyling.langchange();
        if (settings.schedule === 0)
        {
          document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ytest;
        }
        else
        {
          document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ntest;
        }
        document.getElementsByTagName("html")[0].lang = settings.lang == 0 ? "en" : settings.lang == 1 ? "es" : "fr";
        document.getElementById("credits").innerHTML = settings.lang == 0 ? "By Benjamin Harris" : settings.lang == 1 ? "Por Benjamin Harris" : "Par Benjamin Harris"
        break;
        case "KeyM": // insert schedule
        if(!settings.shifting)
        {
          document.getElementsByTagName("input")[1].click();
          const file = document.getElementsByTagName("input")[1].files[0];
        }
        break;
        case "KeyN": // stop using schedule
        settings.useCustomSchedule = false;
        break;
        case "KeyP": // pause
        settings.paused = !settings.paused;
        break;
        case "KeyR": // reset settings
        mainModule.setSettings(
        {
          schedule: 1,
          darkMode: 1,
          grade: 0,
          flipped: false,
          lang: 0,
          textColor: 0,
          paused: false,
          customSchedule: {},
          useCustomSchedule: false,
        });
        elem = document.createElement("img");
        window.document.getElementById("bgimg").remove();
        window.document.body.appendChild(elem);
        update("dark mode");
        elem.id = "bgimg";
        elem.style.display = "none";
        elem.alt = "background image";
        break;
        case "KeyT": // toggle testing schedule
        scheduleToggle();
        break;
        case "KeyU": // ukrainian mode
        document.getElementById("bgimg").src = "a2.png";
        document.getElementById("bgimg").style.display = "block";
        update("dark mode");
        break;
        case "Space": // change background color
        toggleDarkMode();
        break;
        case "ShiftLeft": // Stop shifting
        case "ShiftRight":
        settings.shifting = false;
        break;
      }
      update("grade");
    mainModule.setSettings(settings);
  },
  handleKeyDown(e)
  {
    let code = e.code;

    if(code == "ShiftLeft" || code == "ShiftRight")
      {
      let settings = mainModule.getSettings();
      settings.shifting = true;
      mainModule.setSettings(settings);
    }
  },
  scheduleToggle: scheduleToggle
};

const time = {

    /**
    * Returns the date value mod 86400 seconds of the hour, minute, and seconds
    * @param {string} time The time in military time
    */
    ofDay(time)
    {
      const arr = time.split(":");
      const h = parseInt(arr[0]);
      const m = parseInt(arr[1]);
      const s = arr.length > 2 ? parseInt(arr[2]) : 0;
      let retval = ((((((h+(new Date().getTimezoneOffset()/60))*60)+m)*60)+s)*1000)%86400000;
      while(true)
      {
        if(retval >= 0)
        {
          return retval;
        }
        else
        {
          retval += 86400000;
        }
      }
    },
    /**
    * Returns the date value mod 86400 seconds of the hour, minute, and seconds
    * @param {Number} h The hour in local time
    * @param {Number} m The minute in local time
    * @param {Number} s The second in local time
    * @param {Number} d The day in local time, Thursday is 0, Wednesday is 6
    */
    ofWeek(h, m, s = 0, d = 0)
    {
      /*
      Thu:0
      Fri:1
      Sat:2
      Sun:3
      Mon:4
      Tue:5
      Wed:6
      */
      let retval =  ((((((((h+(new Date().getTimezoneOffset()/60)-testOffset)*60)+m)*60)+s)*1000)+(d*86400000))%604800000);
      while(true)
      {
        if(retval >= 0)
        {
          return retval;
        }
        else
        {
          retval += 604800000;
        }
      }
    },
    /**
     * 
     * @param {Number} seconds 
     * @param {string} unit
     */
    fromSeconds(seconds, unit = "auto")
    {
      if (unit == "auto")
      {
        if (seconds >= 86400)
        {
          unit = "days";
        }
        else if (seconds >= 3600)
        {
          unit = "hours";
        }
        else
        {
          unit = "minutes";
        }
      }
      if (unit == "minutes")
      {
        return Math.floor(seconds/60) + ":" + this.zeroify(seconds%60);
      }
      else if (unit == "hours")
      {
        return Math.floor(seconds/3600) + ":" + this.zeroify(Math.floor(seconds/60)%60) + ":" + this.zeroify(seconds%60);
      }
      else if (unit == "days")
      {
        return Math.floor(seconds/86400) + ":" + this.zeroify(Math.floor(seconds/3600)%24) + ":" + this.zeroify(Math.floor(seconds/60)%60) + ":" + this.zeroify(seconds%60);
      }
    },
    fromMilliseconds(ms, unit = "auto")
    {
      const seconds = Math.round(ms/1000);
      if (unit == "auto")
      {
        if (seconds >= 86400)
        {
          unit = "days";
        }
        else if (seconds >= 3600)
        {
          unit = "hours";
        }
        else
        {
          unit = "minutes";
        }
      }
      if (unit == "minutes")
      {
        return Math.floor(seconds/60) + ":" + this.zeroify(seconds%60);
      }
      else if (unit == "hours")
      {
        return Math.floor(seconds/3600) + ":" + this.zeroify(Math.floor(seconds/60)%60) + ":" + this.zeroify(seconds%60);
      }
      else if (unit == "days")
      {
        return Math.floor(seconds/86400) + ":" + this.zeroify(Math.floor(seconds/3600)%24) + ":" + this.zeroify(Math.floor(seconds/60)%60) + ":" + this.zeroify(seconds%60);
      }
    },
    zeroify(num, digits = 2)
    {
      let nums = num.toString(10);
      const an = digits - (nums.length);
      for (let j = 0; j < an; j++)
      {
        nums = "0" + nums;
      }
      return nums;
    },
    testingOffset: testOffset,
};


const userStyling = 
{
  gradechange()
  {
    let settings = mainModule.getSettings();
    if (!settings.shifting)
    {
      settings.grade++;
    }
    else
    {
      settings.grade--;
    }
    if (settings.grade < 0)
    {
      settings.grade += 5;
    }
    settings.grade %= 5;
    mainModule.setSettings(settings);
    update("grade");
  },
  langchange()
  {
    let settings = mainModule.getSettings();
    if (!settings.shifting)
    {
      settings.lang++;
    }
    else
    {
      settings.lang--;
    }
    if (settings.lang < 0)
    {
      settings.lang += 3;
    }
    settings.lang %= 3;
    mainModule.setSettings(settings);
  },
  cycleFonts()
  {
    let settings = mainModule.getSettings();
    if (!settings.shifting)
    {
      font_num++;
    }
    else
    {
      font_num--;
    }
    if (font_num < 0)
    {
      font_num += fonts.length;
    }
    font_num %= fonts.length;
    mainModule.setStyleInfo("period-display", "fontFamily", fonts[font_num]);
    mainModule.setStyleInfo("timer-display", "fontFamily", fonts[font_num]);
    mainModule.setStyleInfo("testing-toggle", "fontFamily", fonts[font_num]);
    mainModule.setStyleInfo("grade", "fontFamily", fonts[font_num]);
    mainModule.setStyleInfo("credits", "fontFamily", fonts[font_num]);
    mainModule.setStyleInfo("issue-link", "fontFamily", fonts[font_num]);
    mainModule.setStyleInfo("hotkey-button", "fontFamily", fonts[font_num]);
  },
  textColorChange(change = true)
  {
    let settings = mainModule.getSettings();
    if(change)
    {
      if (!settings.shifting)
      {
        settings.textColor++;
      }
      else
      {
        settings.textColor--;
      }
      if (settings.textColor < 0)
      {
        settings.textColor += 3;
      }
      settings.textColor %= 3;
    }
    if(settings.textColor === 0)
    {
      mainModule.setStyleInfo("period-display", "color", "#fff");
      mainModule.setStyleInfo("timer-display", "color", "#fff");
      mainModule.setStyleInfo("testing-toggle", "color", "#fff");
      mainModule.setStyleInfo("grade", "color", "#fff");
      mainModule.setStyleInfo("credits", "color", "#fff");
      mainModule.setStyleInfo("hotkey-button", "color", "#fff");
      mainModule.setStyleInfo("period-display", "mixBlendMode", "difference");
      mainModule.setStyleInfo("timer-display", "mixBlendMode", "difference");
      mainModule.setStyleInfo("testing-toggle", "mixBlendMode", "difference");
      mainModule.setStyleInfo("grade", "mixBlendMode", "difference");
      mainModule.setStyleInfo("credits", "mixBlendMode", "difference");
      mainModule.setStyleInfo("hotkey-button", "mixBlendMode", "difference");
    }
    else if(settings.textColor === 1)
    {
      mainModule.setStyleInfo("period-display", "color", "#fff");
      mainModule.setStyleInfo("timer-display", "color", "#fff");
      mainModule.setStyleInfo("testing-toggle", "color", "#fff");
      mainModule.setStyleInfo("grade", "color", "#fff");
      mainModule.setStyleInfo("credits", "color", "#fff");
      mainModule.setStyleInfo("hotkey-button", "color", "#fff");
      mainModule.setStyleInfo("period-display", "mixBlendMode", "normal");
      mainModule.setStyleInfo("timer-display", "mixBlendMode", "normal");
      mainModule.setStyleInfo("testing-toggle", "mixBlendMode", "normal");
      mainModule.setStyleInfo("grade", "mixBlendMode", "normal");
      mainModule.setStyleInfo("credits", "mixBlendMode", "normal");
      mainModule.setStyleInfo("hotkey-button", "mixBlendMode", "normal");
    }
    else
    {
      mainModule.setStyleInfo("period-display", "color", "#000");
      mainModule.setStyleInfo("timer-display", "color", "#000");
      mainModule.setStyleInfo("testing-toggle", "color", "#000");
      mainModule.setStyleInfo("grade", "color", "#000");
      mainModule.setStyleInfo("credits", "color", "#000");
      mainModule.setStyleInfo("hotkey-button", "color", "#000");
      mainModule.setStyleInfo("period-display", "mixBlendMode", "normal");
      mainModule.setStyleInfo("timer-display", "mixBlendMode", "normal");
      mainModule.setStyleInfo("testing-toggle", "mixBlendMode", "normal");
      mainModule.setStyleInfo("grade", "mixBlendMode", "normal");
      mainModule.setStyleInfo("credits", "mixBlendMode", "normal");
      mainModule.setStyleInfo("hotkey-button", "mixBlendMode", "normal");
    }
  },
  flashRed()
  {
      mainModule.setStyleInfo("period-display", "color", "#f00");
      mainModule.setStyleInfo("timer-display", "color", "#f00");
      mainModule.setStyleInfo("testing-toggle", "color", "#f00");
      mainModule.setStyleInfo("grade", "color", "#f00");
      mainModule.setStyleInfo("credits", "color", "#f00");
      mainModule.setStyleInfo("hotkey-button", "color", "#f00");
      mainModule.setStyleInfo("period-display", "mixBlendMode", "normal");
      mainModule.setStyleInfo("timer-display", "mixBlendMode", "normal");
      mainModule.setStyleInfo("testing-toggle", "mixBlendMode", "normal");
      mainModule.setStyleInfo("grade", "mixBlendMode", "normal");
      mainModule.setStyleInfo("credits", "mixBlendMode", "normal");
      mainModule.setStyleInfo("hotkey-button", "mixBlendMode", "normal");
  }
};

// Functions
/**
 * @param {string} subject "grade" or "dark mode"
 */
function update(subject)
{
  const settings = mainModule.getSettings();
  if(subject == "grade")
  {
    switch(mainModule.getSettings().grade)
    {
      case 0:
        mainModule.setElementInsides("grade", lang[mainModule.getSettings().lang].gr6sched);
        break;
      case 1:
        mainModule.setElementInsides("grade", lang[mainModule.getSettings().lang].gr7sched);
        break;
      case 2: 
        mainModule.setElementInsides("grade", lang[mainModule.getSettings().lang].gr8sched);
        break;
      case 3: 
        mainModule.setElementInsides("grade", lang[mainModule.getSettings().lang].ths1);
        break;
      case 4: 
        mainModule.setElementInsides("grade", lang[mainModule.getSettings().lang].ths2);
        break;
      default:
        mainModule.setElementInsides("grade", "why you do dat");
    }
  }
  if(subject == "dark mode")
  {
    if (mainModule.getSettings().darkMode == 1)
    {
      window.document.body.style.backgroundColor = "#000000";
    }
    else if (mainModule.getSettings().darkMode == 2)
    {
      window.document.body.style.backgroundColor = "#FFFFFF";
    }
    else if(mainModule.getElementInsides("period-display") == lang[settings.lang].learnt || mainModule.getElementInsides("period-display") == lang[settings.lang].summer)
    {
      const isWeekend = ((time.ofWeek(14, 44, 59, 1) < (Date.now()%604800000)) && ((Date.now()%604800000) < time.ofWeek(7, 45, 1, 4)));
      const timeUntilSchool = isWeekend ? (time.ofWeek(7, 45, 0, 4)-(Date.now()%604800000)) : ((time.ofDay("07:45")+86400000)-(Date.now()%86400000))%86400000;
      const TUSFraction = isWeekend && (timeUntilSchool > 0) ? 1-((timeUntilSchool+230700000)/461400000) : 1-((timeUntilSchool/*+57900000*/)/115800000);
      const bgColor = color.toHue(color.decimalToColor(TUSFraction));
      window.document.body.style.backgroundColor = bgColor;
    }
  }
}

function toggleDarkMode()
{
  let settings = mainModule.getSettings();
  if (!settings.shifting)
  {
    settings.darkMode++;
  }
  else
  {
    settings.darkMode--;
  }
  if (settings.darkMode < 0)
  {
    settings.darkMode += 3;
  }
  settings.darkMode %= 3;
  mainModule.setSettings(settings);
  update("dark mode");
}

function range(num)
{
  let arr = [];
  for (let i = 0; i < num; i++)
    {
      arr.push(i);
  }
  return arr;
}

function scheduleToggle()
{
  let settings = mainModule.getSettings();
  if (!settings.shifting)
  {
    settings.schedule++;
  }
  else
  {
    settings.schedule--;
  }
  if (settings.schedule < 0)
    {
      settings.schedule += 3;
  }
  settings.schedule %= 3;
  if (settings.schedule === 0)
    {
    document.getElementById("testing-toggle").innerHTML = lang[settings.lang].assembly;
  }
  else if(settings.schedule === 1)
  {
    document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ntest;
  }
  else
  {
    document.getElementById("testing-toggle").innerHTML = lang[settings.lang].ytest;
  }

  mainModule.setSettings(settings);
  mainModule.updateTimer();
}

function noNegativeModulo(dis, dat)
{
  if ((dis >= 0) && (dat >= 0))
    {
    return dis % dat;
  }
  if (dat < 0)
    {
      dat *= -1;
      dis *= -1;
    }
    
    do
    {
    dis += dat;
  }
  while (dis >= 0);
  
  return dis % dat;
}

function updateTimer(timesIn, periodsIn, flash = 0, passing = [])
{
  const now = (Date.now() + (time.testingOffset * 3600_000)) % 86400000;
  
  const startOfDay = time.ofDay(timesIn[0]);
  const endOfDay = time.ofDay(timesIn[timesIn.length - 1]);
  
  const lengthOfDay = endOfDay - startOfDay >= 0 ? endOfDay - startOfDay : endOfDay - startOfDay + 86400000;

  const thePartThatHasAlreadyPassed = now - startOfDay;
  const percentageRaw = thePartThatHasAlreadyPassed/lengthOfDay;
  
  const percentageRefined = Math.round(percentageRaw*1000)/10;
  const percentageString = `<br />${percentageRefined}${lang[settings.lang].dwtd}`;

  if (!(((periodDisplay.innerHTML == lang[settings.lang].learnt) || (periodDisplay.innerHTML == lang[settings.lang].loading))) && (settings.darkMode == 0))
  {
    document.body.style.backgroundColor = color.toHue(color.decimalToColor(percentageRaw/2));
  }
  periodDisplay.innerHTML = lang[settings.lang].learnt;
  timerDisplay.innerHTML = time.fromMilliseconds((time.ofDay(timesIn[0])+86400000-now)%86400000) + lang[settings.lang].ussa;

  for (let i = 0; i + 1 < timesIn.length; i++)
  {
    if ((now > time.ofDay(timesIn[i])) && (now < time.ofDay(timesIn[i + 1])))
    {
      periodDisplay.innerHTML = periodsIn[i][settings.lang];
      timerDisplay.innerHTML = time.fromMilliseconds(time.ofDay(timesIn[i + 1])-now) + ` ${settings.lang === 0 ? "remaining" : settings.lang === 1 ? "restante" : "restant"}${passing.includes(i) ? "" :  ("<br />" + Math.round((now-time.ofDay(timesIn[i]))*1000/(time.ofDay(timesIn[i+1])-time.ofDay(timesIn[i])))/10 + lang[settings.lang].dwtc)}${percentageString}`;
      if (flash > 0 && passing.includes(i) && time.ofDay(timesIn[i + 1])-now < flash * 1000)
      {
        if (Math.round(Date.now()/1000) % 2 == 1)
        {
          userStyling.flashRed();
        }
        else
        {
          userStyling.textColorChange(false);
        }
      }
    }
  }
}
function doTimerControl()
{
  const yes = new Date(Date.now() + (time.testingOffset * 3600_000));
  const timeOfWeek = (Date.now() + (time.testingOffset * 3600_000)) % 604800000;
  const timeOfDay = (Date.now() + (time.testingOffset * 3600_000)) % 86400000;
  const isWeekend = ((time.ofWeek(15,  0,  0, 1) < timeOfWeek) && (timeOfWeek < time.ofWeek(7, 50, 1, 4)));
  let isSummer = ((yes.getMonth() >= 4) && (yes.getMonth() <= 7));
  //                   August               the 12th                    May                 the 23rd
  if ((yes.getMonth() == 7 && yes.getDate() >= 12) || (yes.getMonth() == 4 && yes.getDate() <= 23))
  {
    isSummer = false;
  }
  if (!isSummer && !settings.paused)
  {
    if (!isWeekend && !settings.useCustomSchedule)
    {
      if (settings.schedule === 0)
      {
        updateTimer(scheduleData.times.assembly[settings.grade], scheduleData.names.assembly[settings.grade]);
      }
      else if (settings.schedule === 1)
      { 
        const date = new Date();
        let day;
        switch (date.getDay())
        {
          case 1:
            day = "monday";
            break;
          case 2:
            day = "tuesday";
            break;
          case 3:
            day = "wednesday";
            break;
          case 4:
            day = "thursday";
            break;
          case 5:
            day = "friday";
            break;
          case 6:
            day = "saturday";
            break;
          case 0:
            day = "sunday";
            break;
        }
        const timesIn = Array.isArray(scheduleData.times.normal[settings.grade]) ? scheduleData.times.normal[settings.grade] : scheduleData.times.normal[settings.grade][day];
        const namesIn = Array.isArray(scheduleData.names.normal[settings.grade]) ? scheduleData.names.normal[settings.grade] : scheduleData.names.normal[settings.grade][day];
        const passingIn = Array.isArray(scheduleData.passing.normal[settings.grade]) ? scheduleData.passing.normal[settings.grade] : scheduleData.passing.normal[settings.grade][day];

        //                                      Is middle school        Is Wednesday or Thursday              Block schedule
          // debugger;
        updateTimer(timesIn, namesIn, settings.grade > 2  ? 120 : 0,
        scheduleData.passing.normal[!(settings.grade < 3) && (yes.getDay() == 3 || yes.getDay() == 4) ? settings.grade + 2 : settings.grade]);
      }
      else
      {
        updateTimer(scheduleData.times.test[settings.grade], scheduleData.names.test[settings.grade]);
      }
    }
    else if (!isWeekend)
    {
      const date = new Date();
      let day;
      switch (date.getDay())
      {
        case 1:
          day = "monday";
          break;
        case 2:
          day = "tuesday";
          break;
        case 3:
          day = "wednesday";
          break;
        case 4:
          day = "thursday";
          break;
        case 5:
          day = "friday";
          break;
        case 6:
          day = "saturday";
          break;
        case 0:
          day = "sunday";
          break;
      }
      const timesIn = Array.isArray(settings.customSchedule.times) ? settings.customSchedule.times : settings.customSchedule.times[day];
      const namesIn = Array.isArray(settings.customSchedule.names) ? settings.customSchedule.names : settings.customSchedule.names[day];
      const passingIn = Array.isArray(settings.customSchedule.passing) ? settings.customSchedule.passing : settings.customSchedule.passing[day];
      updateTimer(timesIn, namesIn, settings.customSchedule.flash, passingIn);
    }
    else
    {
      periodDisplay.innerHTML = lang[settings.lang].learnt;
      timerDisplay.innerHTML = time.fromMilliseconds(time.ofWeek(7, 50, 0, 4)-timeOfWeek + (settings.grade > 2 ? 300_000 : 0)) + lang[settings.lang].ussa;
    }
  }
  else if (!settings.paused)
    {
      periodDisplay.innerHTML = lang[settings.lang].summer;
      const dayIfNecessary = settings.grade ? 86400000 : 0
      timerDisplay.innerHTML = time.fromMilliseconds(Number(new Date("12 Aug 2024 07:50:00")) - Number(yes) + dayIfNecessary) + lang[settings.lang].ussa;
    }
    update("dark mode");
}

function handleImage(event)
{
  let output = document.getElementById("bgimg");
  output.src = URL.createObjectURL(event.target.files[0]);
}

function openHotkeys(e)
{
  document.getElementById("hotkey-screen").style.display = "block";
}
function closeHotkeys(e)
{
  document.getElementById("hotkey-screen").style.display = "none";
}

function addSchedule(e)
{
  let file = e.target.files[0];
  const fr = new FileReader();
  fr.onload = function()
  {
    settings.customSchedule = JSON.parse(fr.result);
    settings.useCustomSchedule = true;
    gradeButton.innerHTML = settings.customSchedule.schedule_name;
  };
  fr.readAsText(file);
}

/**
 * @returns {void}
*/
function main()
{
  doTimerControl();
  update("dark mode");
  setInterval(doTimerControl, 1000/10);
  document.getElementById("hotkey-button").onclick = openHotkeys;
  document.getElementById("close-hotkeys").onclick = closeHotkeys;
  document.getElementById("image-selector").onchange = handleImage;
  document.getElementById("schedule-maker").onchange = addSchedule;
  document.addEventListener("keyup", keys.handleKeyUp);
  document.addEventListener("keydown", keys.handleKeyDown);
  testingButton.onclick = keys.scheduleToggle;
  gradeButton.onclick = userStyling.gradechange;
}

main();
