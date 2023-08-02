// Imports
import time from "./time.js";

// Exports
export default
{
  times: {
    normal: [
              [   //         Start time               End time
                time.ofDay( 7, 50), time.ofDay( 8, 15), // AB 6
                time.ofDay( 8, 18), time.ofDay( 9,  0), // P1 6
                time.ofDay( 9,  3), time.ofDay( 9, 45), // P2 6
                time.ofDay( 9, 48), time.ofDay(10, 30), // P3 6
                time.ofDay(10, 33), time.ofDay(11, 15), // P4 6
                /*Teleport - 11:15*/time.ofDay(11, 45), // Lu 6
                time.ofDay(11, 48), time.ofDay(12, 30), // P5 6
                time.ofDay(12, 33), time.ofDay(13, 15), // P6 6
                time.ofDay(13, 18), time.ofDay(14,  0), // P7 6
                time.ofDay(14,  3), time.ofDay(14, 45), // P8 6
              ],
              [   //         Start time               End time
                time.ofDay( 7, 50), time.ofDay( 8, 15), // AB 7
                time.ofDay( 8, 18), time.ofDay( 9,  0), // P1 7
                time.ofDay( 9,  3), time.ofDay( 9, 45), // P2 7
                time.ofDay( 9, 48), time.ofDay(10, 30), // P3 7
                time.ofDay(10, 33), time.ofDay(11, 15), // P4 7
                time.ofDay(11, 18), time.ofDay(12,  0), // P5 7
                /*  Teleport - 12:00  */time.ofDay(12, 30), // Lu 7
                time.ofDay(12, 33), time.ofDay(13, 15), // P6 7
                time.ofDay(13, 18), time.ofDay(14,  0), // P7 7
                time.ofDay(14,  3), time.ofDay(14, 45), // P8 7
              ],
              [   //         Start time               End time
                time.ofDay( 7, 50), time.ofDay( 8, 15), // AB 8
                time.ofDay( 8, 18), time.ofDay( 9,  0), // P1 8
                time.ofDay( 9,  3), time.ofDay( 9, 45), // P2 8
                time.ofDay( 9, 48), time.ofDay(10, 30), // P3 8
                time.ofDay(10, 33), time.ofDay(11, 15), // P4 8
                time.ofDay(11, 18), time.ofDay(12,  0), // P5 8
                time.ofDay(12,  3), time.ofDay(12, 45), // P6 8
                /*  Teleport - 12:45  */time.ofDay(13, 15), // Lu 8
                time.ofDay(13, 18), time.ofDay(14,  0), // P7 8
                time.ofDay(14,  3), time.ofDay(14, 45), // P8 8
              ],
              [   //         Start time               End time
                time.ofDay( 7, 55), time.ofDay( 8, 40), // P1 1 THS
                time.ofDay( 8, 45), time.ofDay( 9, 30), // P2 1 THS
                time.ofDay( 9, 35), time.ofDay(10, 20), // P3 1 THS
                time.ofDay(10, 25), time.ofDay(11, 10), // P4 1 THS
                /*  Teleport - 11:10  */time.ofDay(11, 40), // Lu 1 THS
                time.ofDay(11, 45), time.ofDay(12, 30), // P5 1 THS
                time.ofDay(12, 35), time.ofDay(13, 20), // P6 1 THS
                time.ofDay(13, 25), time.ofDay(14, 10), // P7 1 THS
                time.ofDay(14, 15), time.ofDay(15,  0), // P8 1 THS
              ],
              [   //         Start time               End time
                time.ofDay( 7, 55), time.ofDay( 8, 40), // P1 2 THS
                time.ofDay( 8, 45), time.ofDay( 9, 30), // P2 2 THS
                time.ofDay( 9, 35), time.ofDay(10, 20), // P3 2 THS
                time.ofDay(10, 25), time.ofDay(11, 10), // P4 2 THS
                time.ofDay(11, 15), time.ofDay(12,  0), // P5 2 THS
                /*  Teleport - 12:00  */time.ofDay(12, 30), // Lu 2 THS
                time.ofDay(12, 35), time.ofDay(13, 20), // P6 2 THS
                time.ofDay(13, 25), time.ofDay(14, 10), // P7 2 THS
                time.ofDay(14, 15), time.ofDay(15,  0), // P8 2 THS
              ],
              [   //         Start time               End time
                time.ofDay( 7, 55), time.ofDay( 9, 18), // P1/2 1 THS BLOCK
                time.ofDay( 9, 23), time.ofDay(10,  6), // TrTi 1 THS BLOCK
                time.ofDay(10, 11), time.ofDay(11, 34), // P3/4 1 THS BLOCK
                /*  Teleport - 11:34  */time.ofDay(12,  4), // Lunc 1 THS BLOCK
                time.ofDay(12,  9), time.ofDay(13, 32), // P5/6 1 THS BLOCK
                time.ofDay(13, 37), time.ofDay(15,  0), // P7/8 1 THS BLOCK
              ],
              [   //         Start time               End time
                time.ofDay( 7, 55), time.ofDay( 9, 18), // P1/2 2 THS BLOCK
                time.ofDay( 9, 23), time.ofDay(10,  6), // TrTi 2 THS BLOCK
                time.ofDay(10, 11), time.ofDay(11, 34), // P3/4 2 THS BLOCK
                time.ofDay(11, 39), time.ofDay(13,  2), // P5/6 2 THS BLOCK
                /*  Teleport - 13:02  */time.ofDay(13, 32), // Lunc 2 THS BLOCK
                time.ofDay(13, 37), time.ofDay(15,  0), // P7/8 2 THS BLOCK
              ]
            ],
    test:   [
              [   //         Start time               End time
                time.ofDay( 7, 50), time.ofDay( 9, 35), // AB 6
                time.ofDay( 9, 38), time.ofDay(10, 10), // P1 6
                time.ofDay(10, 13), time.ofDay(10, 45), // P2 6
                time.ofDay(10, 48), time.ofDay(11, 20), // P3 6
                /*  Teleport - 11:20  */time.ofDay(11, 50), // Lu 6
                time.ofDay(11, 53), time.ofDay(12, 25), // P4 6
                time.ofDay(12, 28), time.ofDay(13,  0), // P5 6
                time.ofDay(13,  3), time.ofDay(13, 35), // P6 6
                time.ofDay(13, 38), time.ofDay(14, 10), // P7 6
                time.ofDay(14, 13), time.ofDay(14, 45), // P8 6
              ],
              [   //         Start time               End time
                time.ofDay( 7, 50), time.ofDay( 9, 35), // AB 7
                time.ofDay( 9, 38), time.ofDay(10, 10), // P1 7
                time.ofDay(10, 13), time.ofDay(10, 45), // P2 7
                time.ofDay(10, 48), time.ofDay(11, 20), // P3 7
                time.ofDay(11, 23), time.ofDay(11, 55), // P4 7
                /*  Teleport - 11:55  */time.ofDay(12, 25), // Lu 7
                time.ofDay(12, 28), time.ofDay(13,  0), // P5 7
                time.ofDay(13,  3), time.ofDay(13, 35), // P6 7
                time.ofDay(13, 38), time.ofDay(14, 10), // P7 7
                time.ofDay(14, 13), time.ofDay(14, 45), // P8 7
              ],
              [   //         Start time               End time
                time.ofDay( 7, 50), time.ofDay( 9, 35), // AB 8
                time.ofDay( 9, 38), time.ofDay(10, 10), // P1 8
                time.ofDay(10, 13), time.ofDay(10, 45), // P2 8
                time.ofDay(10, 48), time.ofDay(11, 20), // P3 8
                time.ofDay(11, 23), time.ofDay(11, 55), // P4 8
                time.ofDay(11, 58), time.ofDay(12, 30), // P5 8
                /*  Teleport - 12:30  */time.ofDay(13,  0), // Lu 8
                time.ofDay(13,  3), time.ofDay(13, 35), // P6 8
                time.ofDay(13, 38), time.ofDay(14, 10), // P7 8
                time.ofDay(14, 13), time.ofDay(14, 45), // P8 8
              ]
            ],
  assembly: [
              [   //         Start time               End time
                time.ofDay( 7, 50), time.ofDay( 8, 55), // AB 6
                time.ofDay( 8, 58), time.ofDay( 9, 35), // P1 6
                time.ofDay( 9, 38), time.ofDay(10, 15), // P2 6
                time.ofDay(10, 18), time.ofDay(10, 55), // P3 6
                time.ofDay(10, 58), time.ofDay(11, 35), // P4 6
                /*  Teleport - 11:35  */time.ofDay(12,  5), // Lu 6
                time.ofDay(12,  8), time.ofDay(12, 45), // P5 6
                time.ofDay(12, 48), time.ofDay(13, 25), // P6 6
                time.ofDay(13, 28), time.ofDay(14,  5), // P7 6
                time.ofDay(14,  8), time.ofDay(14, 45), // P8 6
              ],
              [   //         Start time               End time
                time.ofDay( 7, 50), time.ofDay( 8, 27), // P1 7
                time.ofDay( 8, 30), time.ofDay( 9,  7), // P2 7
                time.ofDay( 9, 10), time.ofDay(10, 15), // AB 7
                time.ofDay(10, 18), time.ofDay(10, 55), // P3 7
                time.ofDay(10, 58), time.ofDay(11, 35), // P4 7
                time.ofDay(11, 38), time.ofDay(12, 15), // P5 7
                /*  Teleport - 12:15  */time.ofDay(12, 45), // Lu 7
                time.ofDay(12, 48), time.ofDay(13, 25), // P6 7
                time.ofDay(13, 28), time.ofDay(14,  5), // P7 7
                time.ofDay(14,  8), time.ofDay(14, 45), // P8 7
              ],
              [   //         Start time               End time
                time.ofDay( 7, 50), time.ofDay( 8, 27), // P1 8
                time.ofDay( 8, 30), time.ofDay( 9,  7), // P2 8
                time.ofDay( 9, 10), time.ofDay( 9, 47), // P3 8
                time.ofDay( 9, 50), time.ofDay(10, 27), // P4 8
                time.ofDay(10, 30), time.ofDay(11, 35), // AB 8
                time.ofDay(11, 38), time.ofDay(12, 15), // P5 8
                time.ofDay(12, 18), time.ofDay(12, 55), // P6 8
                /*  Teleport - 12:55  */time.ofDay(13, 25), // Lu 8
                time.ofDay(13, 28), time.ofDay(14,  5), // P7 8
                time.ofDay(14,  8), time.ofDay(14, 45), // P8 8
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
              [ // THS 1
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
              [ // THS 2
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
              [ // THS 1 ODD BLOCK
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
              ],
              [ // THS 2 ODD BLOCK
                ["1<sup>st</sup> hour", "1<sup>a</sup> hora", "1<sup>er</sup> cours"],
                ["1-Tro. Time", "1-Tiem. Tro.", "1-Tem. Tro."],
                ["Tro. Time", "Tiem. Tro.", "Tem. Tro."],
                ["Tro. Time-3", "Tiem. Tro.-3", "Tem. Tro.-3"],
                ["3<sup>rd</sup> hour", "3<sup>a</sup> hora", "3<sup>e</sup> cours"],
                ["3-5", "3-5", "3-5"],
                ["5<sup>th</sup> hour", "5<sup>a</sup> hora", "5<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-7", "Almuerzo-7", "Déjeuner-7"],
                ["7<sup>th</sup> hour", "7<sup>a</sup> hora", "7<sup>e</sup> cours"],
              ],
              [ // THS 1 EVEN BLOCK
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-Tro. Time", "2-Tiem. Tro.", "2-Tem. Tro."],
                ["Tro. Time", "Tiem. Tro.", "Tem. Tro."],
                ["Tro. Time-4", "Tiem. Tro.-4", "Tem. Tro.-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-6", "Almuerzo-6", "Déjeuner-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["6-8", "6-8", "6-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"],
              ],
              [ // THS 2 EVEN BLOCK
                ["2<sup>nd</sup> hour", "2<sup>a</sup> hora", "2<sup>e</sup> cours"],
                ["2-Tro. Time", "2-Tiem. Tro.", "2-Tem. Tro."],
                ["Tro. Time", "Tiem. Tro.", "Tem. Tro."],
                ["Tro. Time-4", "Tiem. Tro.-4", "Tem. Tro.-4"],
                ["4<sup>th</sup> hour", "4<sup>a</sup> hora", "4<sup>e</sup> cours"],
                ["4-6", "4-6", "4-6"],
                ["6<sup>th</sup> hour", "6<sup>a</sup> hora", "6<sup>e</sup> cours"],
                ["Lunch", "Almuerzo", "Déjeuner"],
                ["Lunch-8", "Almuerzo-8", "Déjeuner-8"],
                ["8<sup>th</sup> hour", "8<sup>a</sup> hora", "8<sup>e</sup> cours"],
              ],
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
          }
};
