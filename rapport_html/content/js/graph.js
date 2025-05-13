/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 121.0, "minX": 0.0, "maxY": 1987.0, "series": [{"data": [[0.0, 121.0], [0.1, 122.0], [0.2, 123.0], [0.3, 123.0], [0.4, 126.0], [0.5, 127.0], [0.6, 129.0], [0.7, 129.0], [0.8, 130.0], [0.9, 130.0], [1.0, 131.0], [1.1, 131.0], [1.2, 132.0], [1.3, 132.0], [1.4, 133.0], [1.5, 136.0], [1.6, 137.0], [1.7, 137.0], [1.8, 140.0], [1.9, 140.0], [2.0, 142.0], [2.1, 143.0], [2.2, 145.0], [2.3, 145.0], [2.4, 147.0], [2.5, 149.0], [2.6, 149.0], [2.7, 151.0], [2.8, 151.0], [2.9, 152.0], [3.0, 153.0], [3.1, 155.0], [3.2, 156.0], [3.3, 158.0], [3.4, 159.0], [3.5, 160.0], [3.6, 161.0], [3.7, 162.0], [3.8, 162.0], [3.9, 164.0], [4.0, 164.0], [4.1, 166.0], [4.2, 167.0], [4.3, 167.0], [4.4, 168.0], [4.5, 168.0], [4.6, 168.0], [4.7, 170.0], [4.8, 173.0], [4.9, 173.0], [5.0, 174.0], [5.1, 174.0], [5.2, 174.0], [5.3, 175.0], [5.4, 175.0], [5.5, 176.0], [5.6, 176.0], [5.7, 176.0], [5.8, 178.0], [5.9, 179.0], [6.0, 180.0], [6.1, 181.0], [6.2, 181.0], [6.3, 182.0], [6.4, 183.0], [6.5, 184.0], [6.6, 185.0], [6.7, 185.0], [6.8, 187.0], [6.9, 187.0], [7.0, 188.0], [7.1, 188.0], [7.2, 190.0], [7.3, 190.0], [7.4, 191.0], [7.5, 192.0], [7.6, 193.0], [7.7, 194.0], [7.8, 195.0], [7.9, 195.0], [8.0, 196.0], [8.1, 196.0], [8.2, 196.0], [8.3, 198.0], [8.4, 198.0], [8.5, 199.0], [8.6, 199.0], [8.7, 200.0], [8.8, 200.0], [8.9, 202.0], [9.0, 202.0], [9.1, 202.0], [9.2, 202.0], [9.3, 203.0], [9.4, 203.0], [9.5, 203.0], [9.6, 204.0], [9.7, 204.0], [9.8, 206.0], [9.9, 206.0], [10.0, 206.0], [10.1, 207.0], [10.2, 208.0], [10.3, 208.0], [10.4, 208.0], [10.5, 208.0], [10.6, 208.0], [10.7, 209.0], [10.8, 210.0], [10.9, 210.0], [11.0, 211.0], [11.1, 211.0], [11.2, 211.0], [11.3, 211.0], [11.4, 212.0], [11.5, 212.0], [11.6, 213.0], [11.7, 213.0], [11.8, 213.0], [11.9, 213.0], [12.0, 213.0], [12.1, 213.0], [12.2, 214.0], [12.3, 214.0], [12.4, 215.0], [12.5, 215.0], [12.6, 215.0], [12.7, 215.0], [12.8, 216.0], [12.9, 216.0], [13.0, 216.0], [13.1, 217.0], [13.2, 217.0], [13.3, 218.0], [13.4, 218.0], [13.5, 218.0], [13.6, 218.0], [13.7, 218.0], [13.8, 218.0], [13.9, 219.0], [14.0, 219.0], [14.1, 219.0], [14.2, 219.0], [14.3, 219.0], [14.4, 219.0], [14.5, 220.0], [14.6, 220.0], [14.7, 220.0], [14.8, 220.0], [14.9, 220.0], [15.0, 220.0], [15.1, 220.0], [15.2, 220.0], [15.3, 220.0], [15.4, 220.0], [15.5, 220.0], [15.6, 221.0], [15.7, 221.0], [15.8, 221.0], [15.9, 221.0], [16.0, 221.0], [16.1, 221.0], [16.2, 221.0], [16.3, 221.0], [16.4, 221.0], [16.5, 221.0], [16.6, 222.0], [16.7, 222.0], [16.8, 223.0], [16.9, 223.0], [17.0, 223.0], [17.1, 223.0], [17.2, 223.0], [17.3, 223.0], [17.4, 223.0], [17.5, 224.0], [17.6, 224.0], [17.7, 224.0], [17.8, 224.0], [17.9, 224.0], [18.0, 224.0], [18.1, 225.0], [18.2, 225.0], [18.3, 225.0], [18.4, 225.0], [18.5, 225.0], [18.6, 225.0], [18.7, 225.0], [18.8, 225.0], [18.9, 226.0], [19.0, 226.0], [19.1, 226.0], [19.2, 226.0], [19.3, 226.0], [19.4, 227.0], [19.5, 227.0], [19.6, 227.0], [19.7, 227.0], [19.8, 227.0], [19.9, 227.0], [20.0, 228.0], [20.1, 228.0], [20.2, 228.0], [20.3, 228.0], [20.4, 228.0], [20.5, 228.0], [20.6, 228.0], [20.7, 228.0], [20.8, 228.0], [20.9, 228.0], [21.0, 228.0], [21.1, 228.0], [21.2, 228.0], [21.3, 229.0], [21.4, 229.0], [21.5, 229.0], [21.6, 229.0], [21.7, 229.0], [21.8, 229.0], [21.9, 229.0], [22.0, 230.0], [22.1, 230.0], [22.2, 230.0], [22.3, 230.0], [22.4, 230.0], [22.5, 231.0], [22.6, 231.0], [22.7, 231.0], [22.8, 231.0], [22.9, 231.0], [23.0, 231.0], [23.1, 231.0], [23.2, 231.0], [23.3, 231.0], [23.4, 232.0], [23.5, 232.0], [23.6, 232.0], [23.7, 232.0], [23.8, 232.0], [23.9, 233.0], [24.0, 233.0], [24.1, 233.0], [24.2, 233.0], [24.3, 233.0], [24.4, 233.0], [24.5, 234.0], [24.6, 234.0], [24.7, 234.0], [24.8, 234.0], [24.9, 234.0], [25.0, 234.0], [25.1, 235.0], [25.2, 235.0], [25.3, 235.0], [25.4, 235.0], [25.5, 236.0], [25.6, 236.0], [25.7, 236.0], [25.8, 236.0], [25.9, 237.0], [26.0, 237.0], [26.1, 237.0], [26.2, 237.0], [26.3, 237.0], [26.4, 238.0], [26.5, 238.0], [26.6, 238.0], [26.7, 238.0], [26.8, 238.0], [26.9, 238.0], [27.0, 238.0], [27.1, 238.0], [27.2, 238.0], [27.3, 238.0], [27.4, 239.0], [27.5, 239.0], [27.6, 239.0], [27.7, 239.0], [27.8, 239.0], [27.9, 239.0], [28.0, 240.0], [28.1, 240.0], [28.2, 240.0], [28.3, 240.0], [28.4, 240.0], [28.5, 240.0], [28.6, 240.0], [28.7, 240.0], [28.8, 240.0], [28.9, 241.0], [29.0, 241.0], [29.1, 241.0], [29.2, 241.0], [29.3, 241.0], [29.4, 241.0], [29.5, 241.0], [29.6, 242.0], [29.7, 242.0], [29.8, 242.0], [29.9, 242.0], [30.0, 242.0], [30.1, 242.0], [30.2, 242.0], [30.3, 242.0], [30.4, 242.0], [30.5, 242.0], [30.6, 243.0], [30.7, 243.0], [30.8, 243.0], [30.9, 243.0], [31.0, 243.0], [31.1, 243.0], [31.2, 244.0], [31.3, 244.0], [31.4, 244.0], [31.5, 244.0], [31.6, 244.0], [31.7, 244.0], [31.8, 244.0], [31.9, 244.0], [32.0, 245.0], [32.1, 245.0], [32.2, 245.0], [32.3, 245.0], [32.4, 245.0], [32.5, 246.0], [32.6, 246.0], [32.7, 246.0], [32.8, 246.0], [32.9, 246.0], [33.0, 246.0], [33.1, 246.0], [33.2, 246.0], [33.3, 247.0], [33.4, 247.0], [33.5, 247.0], [33.6, 247.0], [33.7, 247.0], [33.8, 247.0], [33.9, 247.0], [34.0, 247.0], [34.1, 247.0], [34.2, 247.0], [34.3, 247.0], [34.4, 247.0], [34.5, 247.0], [34.6, 248.0], [34.7, 248.0], [34.8, 248.0], [34.9, 248.0], [35.0, 248.0], [35.1, 248.0], [35.2, 248.0], [35.3, 248.0], [35.4, 248.0], [35.5, 248.0], [35.6, 249.0], [35.7, 249.0], [35.8, 249.0], [35.9, 249.0], [36.0, 249.0], [36.1, 249.0], [36.2, 249.0], [36.3, 249.0], [36.4, 249.0], [36.5, 249.0], [36.6, 249.0], [36.7, 250.0], [36.8, 250.0], [36.9, 250.0], [37.0, 250.0], [37.1, 250.0], [37.2, 250.0], [37.3, 250.0], [37.4, 250.0], [37.5, 250.0], [37.6, 251.0], [37.7, 251.0], [37.8, 251.0], [37.9, 251.0], [38.0, 251.0], [38.1, 251.0], [38.2, 251.0], [38.3, 251.0], [38.4, 251.0], [38.5, 251.0], [38.6, 251.0], [38.7, 251.0], [38.8, 251.0], [38.9, 252.0], [39.0, 252.0], [39.1, 252.0], [39.2, 252.0], [39.3, 252.0], [39.4, 252.0], [39.5, 253.0], [39.6, 253.0], [39.7, 253.0], [39.8, 253.0], [39.9, 253.0], [40.0, 253.0], [40.1, 253.0], [40.2, 253.0], [40.3, 253.0], [40.4, 253.0], [40.5, 253.0], [40.6, 254.0], [40.7, 254.0], [40.8, 254.0], [40.9, 254.0], [41.0, 254.0], [41.1, 254.0], [41.2, 254.0], [41.3, 255.0], [41.4, 255.0], [41.5, 255.0], [41.6, 255.0], [41.7, 255.0], [41.8, 255.0], [41.9, 255.0], [42.0, 255.0], [42.1, 255.0], [42.2, 255.0], [42.3, 256.0], [42.4, 256.0], [42.5, 256.0], [42.6, 256.0], [42.7, 256.0], [42.8, 256.0], [42.9, 256.0], [43.0, 257.0], [43.1, 257.0], [43.2, 257.0], [43.3, 257.0], [43.4, 257.0], [43.5, 257.0], [43.6, 257.0], [43.7, 257.0], [43.8, 258.0], [43.9, 258.0], [44.0, 258.0], [44.1, 258.0], [44.2, 258.0], [44.3, 258.0], [44.4, 258.0], [44.5, 258.0], [44.6, 258.0], [44.7, 258.0], [44.8, 258.0], [44.9, 258.0], [45.0, 259.0], [45.1, 259.0], [45.2, 259.0], [45.3, 259.0], [45.4, 259.0], [45.5, 259.0], [45.6, 259.0], [45.7, 259.0], [45.8, 259.0], [45.9, 259.0], [46.0, 260.0], [46.1, 260.0], [46.2, 260.0], [46.3, 260.0], [46.4, 260.0], [46.5, 260.0], [46.6, 260.0], [46.7, 260.0], [46.8, 260.0], [46.9, 261.0], [47.0, 261.0], [47.1, 261.0], [47.2, 261.0], [47.3, 261.0], [47.4, 261.0], [47.5, 262.0], [47.6, 262.0], [47.7, 262.0], [47.8, 262.0], [47.9, 262.0], [48.0, 262.0], [48.1, 262.0], [48.2, 262.0], [48.3, 262.0], [48.4, 262.0], [48.5, 263.0], [48.6, 263.0], [48.7, 263.0], [48.8, 263.0], [48.9, 263.0], [49.0, 263.0], [49.1, 263.0], [49.2, 264.0], [49.3, 264.0], [49.4, 264.0], [49.5, 264.0], [49.6, 264.0], [49.7, 264.0], [49.8, 264.0], [49.9, 264.0], [50.0, 265.0], [50.1, 265.0], [50.2, 265.0], [50.3, 265.0], [50.4, 265.0], [50.5, 265.0], [50.6, 265.0], [50.7, 266.0], [50.8, 266.0], [50.9, 266.0], [51.0, 266.0], [51.1, 266.0], [51.2, 266.0], [51.3, 266.0], [51.4, 266.0], [51.5, 266.0], [51.6, 266.0], [51.7, 266.0], [51.8, 266.0], [51.9, 266.0], [52.0, 267.0], [52.1, 267.0], [52.2, 267.0], [52.3, 267.0], [52.4, 267.0], [52.5, 268.0], [52.6, 268.0], [52.7, 268.0], [52.8, 268.0], [52.9, 268.0], [53.0, 268.0], [53.1, 268.0], [53.2, 269.0], [53.3, 269.0], [53.4, 269.0], [53.5, 269.0], [53.6, 269.0], [53.7, 269.0], [53.8, 269.0], [53.9, 269.0], [54.0, 270.0], [54.1, 270.0], [54.2, 270.0], [54.3, 270.0], [54.4, 270.0], [54.5, 270.0], [54.6, 270.0], [54.7, 270.0], [54.8, 270.0], [54.9, 270.0], [55.0, 271.0], [55.1, 271.0], [55.2, 271.0], [55.3, 271.0], [55.4, 271.0], [55.5, 271.0], [55.6, 271.0], [55.7, 272.0], [55.8, 272.0], [55.9, 272.0], [56.0, 272.0], [56.1, 272.0], [56.2, 272.0], [56.3, 272.0], [56.4, 272.0], [56.5, 272.0], [56.6, 273.0], [56.7, 273.0], [56.8, 273.0], [56.9, 273.0], [57.0, 273.0], [57.1, 273.0], [57.2, 274.0], [57.3, 274.0], [57.4, 274.0], [57.5, 274.0], [57.6, 274.0], [57.7, 274.0], [57.8, 274.0], [57.9, 274.0], [58.0, 274.0], [58.1, 274.0], [58.2, 275.0], [58.3, 275.0], [58.4, 275.0], [58.5, 275.0], [58.6, 275.0], [58.7, 275.0], [58.8, 275.0], [58.9, 275.0], [59.0, 275.0], [59.1, 276.0], [59.2, 276.0], [59.3, 276.0], [59.4, 276.0], [59.5, 276.0], [59.6, 277.0], [59.7, 277.0], [59.8, 277.0], [59.9, 277.0], [60.0, 277.0], [60.1, 277.0], [60.2, 277.0], [60.3, 277.0], [60.4, 277.0], [60.5, 278.0], [60.6, 278.0], [60.7, 278.0], [60.8, 278.0], [60.9, 278.0], [61.0, 278.0], [61.1, 278.0], [61.2, 278.0], [61.3, 279.0], [61.4, 279.0], [61.5, 279.0], [61.6, 279.0], [61.7, 280.0], [61.8, 280.0], [61.9, 280.0], [62.0, 280.0], [62.1, 280.0], [62.2, 280.0], [62.3, 280.0], [62.4, 280.0], [62.5, 281.0], [62.6, 281.0], [62.7, 281.0], [62.8, 281.0], [62.9, 282.0], [63.0, 282.0], [63.1, 282.0], [63.2, 283.0], [63.3, 283.0], [63.4, 283.0], [63.5, 283.0], [63.6, 283.0], [63.7, 283.0], [63.8, 283.0], [63.9, 283.0], [64.0, 284.0], [64.1, 284.0], [64.2, 284.0], [64.3, 284.0], [64.4, 284.0], [64.5, 285.0], [64.6, 285.0], [64.7, 285.0], [64.8, 285.0], [64.9, 285.0], [65.0, 286.0], [65.1, 286.0], [65.2, 286.0], [65.3, 286.0], [65.4, 287.0], [65.5, 287.0], [65.6, 288.0], [65.7, 289.0], [65.8, 289.0], [65.9, 289.0], [66.0, 289.0], [66.1, 289.0], [66.2, 290.0], [66.3, 290.0], [66.4, 290.0], [66.5, 290.0], [66.6, 291.0], [66.7, 291.0], [66.8, 291.0], [66.9, 291.0], [67.0, 292.0], [67.1, 292.0], [67.2, 292.0], [67.3, 292.0], [67.4, 293.0], [67.5, 293.0], [67.6, 293.0], [67.7, 293.0], [67.8, 293.0], [67.9, 293.0], [68.0, 293.0], [68.1, 293.0], [68.2, 294.0], [68.3, 294.0], [68.4, 294.0], [68.5, 294.0], [68.6, 294.0], [68.7, 295.0], [68.8, 295.0], [68.9, 295.0], [69.0, 296.0], [69.1, 296.0], [69.2, 296.0], [69.3, 296.0], [69.4, 296.0], [69.5, 296.0], [69.6, 297.0], [69.7, 297.0], [69.8, 297.0], [69.9, 297.0], [70.0, 298.0], [70.1, 298.0], [70.2, 298.0], [70.3, 299.0], [70.4, 299.0], [70.5, 300.0], [70.6, 300.0], [70.7, 301.0], [70.8, 301.0], [70.9, 301.0], [71.0, 302.0], [71.1, 302.0], [71.2, 302.0], [71.3, 302.0], [71.4, 303.0], [71.5, 303.0], [71.6, 303.0], [71.7, 303.0], [71.8, 303.0], [71.9, 304.0], [72.0, 304.0], [72.1, 304.0], [72.2, 304.0], [72.3, 304.0], [72.4, 306.0], [72.5, 307.0], [72.6, 307.0], [72.7, 307.0], [72.8, 307.0], [72.9, 307.0], [73.0, 307.0], [73.1, 307.0], [73.2, 308.0], [73.3, 308.0], [73.4, 308.0], [73.5, 309.0], [73.6, 309.0], [73.7, 309.0], [73.8, 309.0], [73.9, 310.0], [74.0, 311.0], [74.1, 311.0], [74.2, 311.0], [74.3, 312.0], [74.4, 313.0], [74.5, 313.0], [74.6, 313.0], [74.7, 313.0], [74.8, 314.0], [74.9, 314.0], [75.0, 315.0], [75.1, 315.0], [75.2, 315.0], [75.3, 316.0], [75.4, 317.0], [75.5, 317.0], [75.6, 317.0], [75.7, 318.0], [75.8, 318.0], [75.9, 318.0], [76.0, 320.0], [76.1, 320.0], [76.2, 320.0], [76.3, 320.0], [76.4, 321.0], [76.5, 323.0], [76.6, 325.0], [76.7, 326.0], [76.8, 328.0], [76.9, 330.0], [77.0, 330.0], [77.1, 330.0], [77.2, 331.0], [77.3, 333.0], [77.4, 334.0], [77.5, 335.0], [77.6, 337.0], [77.7, 338.0], [77.8, 340.0], [77.9, 343.0], [78.0, 343.0], [78.1, 345.0], [78.2, 345.0], [78.3, 345.0], [78.4, 347.0], [78.5, 347.0], [78.6, 352.0], [78.7, 352.0], [78.8, 354.0], [78.9, 360.0], [79.0, 362.0], [79.1, 365.0], [79.2, 369.0], [79.3, 371.0], [79.4, 373.0], [79.5, 385.0], [79.6, 389.0], [79.7, 397.0], [79.8, 428.0], [79.9, 432.0], [80.0, 433.0], [80.1, 438.0], [80.2, 440.0], [80.3, 445.0], [80.4, 450.0], [80.5, 457.0], [80.6, 458.0], [80.7, 460.0], [80.8, 466.0], [80.9, 475.0], [81.0, 481.0], [81.1, 481.0], [81.2, 483.0], [81.3, 485.0], [81.4, 489.0], [81.5, 492.0], [81.6, 497.0], [81.7, 502.0], [81.8, 504.0], [81.9, 509.0], [82.0, 512.0], [82.1, 514.0], [82.2, 514.0], [82.3, 516.0], [82.4, 517.0], [82.5, 519.0], [82.6, 519.0], [82.7, 530.0], [82.8, 530.0], [82.9, 535.0], [83.0, 538.0], [83.1, 540.0], [83.2, 542.0], [83.3, 555.0], [83.4, 555.0], [83.5, 557.0], [83.6, 569.0], [83.7, 569.0], [83.8, 571.0], [83.9, 581.0], [84.0, 591.0], [84.1, 593.0], [84.2, 598.0], [84.3, 599.0], [84.4, 605.0], [84.5, 608.0], [84.6, 610.0], [84.7, 611.0], [84.8, 613.0], [84.9, 616.0], [85.0, 618.0], [85.1, 619.0], [85.2, 620.0], [85.3, 622.0], [85.4, 630.0], [85.5, 632.0], [85.6, 655.0], [85.7, 656.0], [85.8, 656.0], [85.9, 663.0], [86.0, 665.0], [86.1, 666.0], [86.2, 666.0], [86.3, 668.0], [86.4, 673.0], [86.5, 676.0], [86.6, 678.0], [86.7, 679.0], [86.8, 681.0], [86.9, 682.0], [87.0, 694.0], [87.1, 697.0], [87.2, 698.0], [87.3, 700.0], [87.4, 706.0], [87.5, 713.0], [87.6, 718.0], [87.7, 723.0], [87.8, 723.0], [87.9, 741.0], [88.0, 743.0], [88.1, 744.0], [88.2, 748.0], [88.3, 749.0], [88.4, 757.0], [88.5, 757.0], [88.6, 758.0], [88.7, 759.0], [88.8, 760.0], [88.9, 765.0], [89.0, 765.0], [89.1, 766.0], [89.2, 767.0], [89.3, 768.0], [89.4, 770.0], [89.5, 770.0], [89.6, 771.0], [89.7, 773.0], [89.8, 776.0], [89.9, 778.0], [90.0, 781.0], [90.1, 783.0], [90.2, 785.0], [90.3, 787.0], [90.4, 788.0], [90.5, 788.0], [90.6, 788.0], [90.7, 789.0], [90.8, 790.0], [90.9, 791.0], [91.0, 792.0], [91.1, 792.0], [91.2, 792.0], [91.3, 795.0], [91.4, 799.0], [91.5, 801.0], [91.6, 805.0], [91.7, 810.0], [91.8, 811.0], [91.9, 815.0], [92.0, 815.0], [92.1, 818.0], [92.2, 823.0], [92.3, 823.0], [92.4, 824.0], [92.5, 825.0], [92.6, 833.0], [92.7, 833.0], [92.8, 838.0], [92.9, 839.0], [93.0, 841.0], [93.1, 844.0], [93.2, 848.0], [93.3, 856.0], [93.4, 859.0], [93.5, 861.0], [93.6, 862.0], [93.7, 863.0], [93.8, 868.0], [93.9, 878.0], [94.0, 889.0], [94.1, 890.0], [94.2, 895.0], [94.3, 896.0], [94.4, 897.0], [94.5, 900.0], [94.6, 903.0], [94.7, 912.0], [94.8, 913.0], [94.9, 915.0], [95.0, 916.0], [95.1, 921.0], [95.2, 935.0], [95.3, 943.0], [95.4, 946.0], [95.5, 949.0], [95.6, 972.0], [95.7, 979.0], [95.8, 982.0], [95.9, 986.0], [96.0, 996.0], [96.1, 1000.0], [96.2, 1008.0], [96.3, 1010.0], [96.4, 1019.0], [96.5, 1025.0], [96.6, 1027.0], [96.7, 1035.0], [96.8, 1038.0], [96.9, 1040.0], [97.0, 1051.0], [97.1, 1051.0], [97.2, 1054.0], [97.3, 1056.0], [97.4, 1063.0], [97.5, 1074.0], [97.6, 1077.0], [97.7, 1077.0], [97.8, 1079.0], [97.9, 1095.0], [98.0, 1111.0], [98.1, 1125.0], [98.2, 1222.0], [98.3, 1228.0], [98.4, 1238.0], [98.5, 1257.0], [98.6, 1262.0], [98.7, 1274.0], [98.8, 1291.0], [98.9, 1303.0], [99.0, 1313.0], [99.1, 1333.0], [99.2, 1357.0], [99.3, 1373.0], [99.4, 1407.0], [99.5, 1468.0], [99.6, 1487.0], [99.7, 1516.0], [99.8, 1815.0], [99.9, 1987.0]], "isOverall": false, "label": "GET /beers", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 618.0, "series": [{"data": [[600.0, 29.0], [700.0, 42.0], [200.0, 618.0], [800.0, 30.0], [900.0, 16.0], [1000.0, 19.0], [1100.0, 2.0], [300.0, 93.0], [1200.0, 7.0], [1300.0, 5.0], [1400.0, 3.0], [1500.0, 1.0], [100.0, 87.0], [400.0, 19.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 27.0]], "isOverall": false, "label": "GET /beers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 802.0, "series": [{"data": [[0.0, 802.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 196.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.371999999999996, "minX": 1.74714144E12, "maxY": 9.371999999999996, "series": [{"data": [[1.74714144E12, 9.371999999999996]], "isOverall": false, "label": "10 Users x 100 Iterations", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74714144E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 131.85714285714283, "minX": 1.0, "maxY": 379.6638554216864, "series": [{"data": [[8.0, 309.1621621621621], [4.0, 262.25], [2.0, 176.0], [1.0, 131.85714285714283], [9.0, 346.9], [10.0, 379.6638554216864], [5.0, 227.66666666666666], [6.0, 298.27777777777777], [3.0, 203.33333333333334], [7.0, 307.7777777777778]], "isOverall": false, "label": "GET /beers", "isController": false}, {"data": [[9.371999999999996, 362.25500000000045]], "isOverall": false, "label": "GET /beers-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2033.3333333333333, "minX": 1.74714144E12, "maxY": 147780.4, "series": [{"data": [[1.74714144E12, 147780.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74714144E12, 2033.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74714144E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 362.25500000000045, "minX": 1.74714144E12, "maxY": 362.25500000000045, "series": [{"data": [[1.74714144E12, 362.25500000000045]], "isOverall": false, "label": "GET /beers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74714144E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 362.1149999999994, "minX": 1.74714144E12, "maxY": 362.1149999999994, "series": [{"data": [[1.74714144E12, 362.1149999999994]], "isOverall": false, "label": "GET /beers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74714144E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.9390000000000005, "minX": 1.74714144E12, "maxY": 0.9390000000000005, "series": [{"data": [[1.74714144E12, 0.9390000000000005]], "isOverall": false, "label": "GET /beers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74714144E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 121.0, "minX": 1.74714144E12, "maxY": 540.0, "series": [{"data": [[1.74714144E12, 540.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74714144E12, 121.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74714144E12, 307.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74714144E12, 439.9000000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74714144E12, 253.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74714144E12, 324.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74714144E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 130.0, "minX": 6.0, "maxY": 915.0, "series": [{"data": [[8.0, 130.0], [16.0, 260.5], [17.0, 200.0], [22.0, 255.0], [23.0, 292.5], [24.0, 253.0], [6.0, 131.5], [25.0, 252.0], [26.0, 255.0], [27.0, 257.5], [28.0, 255.0], [7.0, 132.0], [29.0, 255.0], [30.0, 235.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[22.0, 781.0], [23.0, 754.0], [24.0, 519.0], [25.0, 915.0], [26.0, 767.0], [27.0, 841.0], [28.0, 823.0], [29.0, 741.0], [30.0, 681.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 129.5, "minX": 6.0, "maxY": 915.0, "series": [{"data": [[8.0, 129.5], [16.0, 260.5], [17.0, 200.0], [22.0, 255.0], [23.0, 292.5], [24.0, 253.0], [6.0, 131.5], [25.0, 252.0], [26.0, 255.0], [27.0, 257.0], [28.0, 255.0], [7.0, 132.0], [29.0, 255.0], [30.0, 235.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[22.0, 781.0], [23.0, 754.0], [24.0, 519.0], [25.0, 915.0], [26.0, 767.0], [27.0, 840.0], [28.0, 822.0], [29.0, 741.0], [30.0, 681.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.74714144E12, "maxY": 16.666666666666668, "series": [{"data": [[1.74714144E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74714144E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.2666666666666666, "minX": 1.74714144E12, "maxY": 13.4, "series": [{"data": [[1.74714144E12, 13.4]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.74714144E12, 3.2666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74714144E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.2666666666666666, "minX": 1.74714144E12, "maxY": 13.4, "series": [{"data": [[1.74714144E12, 13.4]], "isOverall": false, "label": "GET /beers-success", "isController": false}, {"data": [[1.74714144E12, 3.2666666666666666]], "isOverall": false, "label": "GET /beers-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74714144E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.2666666666666666, "minX": 1.74714144E12, "maxY": 13.4, "series": [{"data": [[1.74714144E12, 13.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.74714144E12, 3.2666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74714144E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

