const tableLightData = [
  {
    _id: 0,
    name: "tailwind table responsive",
    htmlcode: `<div class="py-20 dark:bg-[#1e1e1e]">
      <section class=" container mx-auto ">
        <div class=" sm:w-full overflow-auto px-4">
          <table class=" md:w-[80%]  mdsm:w-full sm:w-full mx-auto">
            <thead class=" bg-[#0349ff] text-left text-[#f2f2f2] ">
              <tr>
                <th class="px-4 py-2"> ID</th>
                <th class="px-4 py-2">Product</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Shipping</th>
                <th class=" text-center py-2">Status</th>
              </tr>
            </thead>
            <tbody class="border-[#e6e6e6] dark:border-[#5a5a5a]  border-[1px] ">
              <tr class=" border-b-[1px] group dark:border-[#5a5a5a]   dark:text-[#f2f2f2]  border-[#e6e6e6] group text-left  text-sm text-[#3b3b3b] py-2">
                <td class=" py-2 dark:text-[#f2f2f2] text-[#3b3b3b] font-semibold  px-4">
                  RTDWQ052
                </td>
                <td class="  py-2  px-4">Apple Watch </td>
                <td class=" py-2 px-4">Henry</td>
                <td class=" py-2 px-4">Sydney</td>
                <td class=" py-2  flex justify-center items-center ">
                  <div class=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr class=" group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td class="  odd:bg-[#ebf4fe] dark:bg-[#5a5a5a] dark:text-[#f2f2f2] py-2 text-[#3b3b3b] font-semibold px-4">
                  HDDBHS687
                </td>
                <td class=" px-4 even:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2">
                  Apple Watch
                </td>
                <td class="px-4 odd:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2">
                  Alexander
                </td>
                <td class="px-4 even:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2">
                  Berlin
                </td>
                <td class="px-4 odd:bg-[#ebf4fe]  dark:bg-[#5a5a5a] py-2 flex justify-center items-center ">
                  <div class=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr class=" border-b-[1px] group dark:border-[#5a5a5a]   border-[#e6e6e6] group text-left  dark:text-[#f2f2f2] text-sm text-[#3b3b3b] py-2">
                <td class=" py-2 text-[#3b3b3b] font-semibold dark:text-[#f2f2f2]  px-4">
                  OJDE121UB
                </td>
                <td class="  py-2  px-4">Samsung Galaxy</td>
                <td class="px-4 py-2 ">Olivia</td>
                <td class="px-4 py-2 ">Paris</td>
                <td class=" py-2  flex justify-center items-center ">
                  <div class=" rounded-3xl  dark:bg-[#f2f2f2] text-[#a51f1fd6] bg-[#f70a0a69] px-4">
                    Cancel
                  </div>
                </td>
              </tr>

              <tr class="group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td class="dark:text-[#f2f2f2]  dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4">
                  JKSL0945
                </td>
                <td class="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  Vacuum Cleaner
                </td>
                <td class="px-4 dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2">
                  Benjamin
                </td>
                <td class="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  New York
                </td>
                <td class=" odd:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2 flex justify-center items-center ">
                  <div class=" rounded-3xl dark:bg-[#f2f2f2] text-[#9f9300] bg-[#e3d20863] px-4">
                    Pending
                  </div>
                </td>
              </tr>

              <tr class=" dark:text-[#f2f2f2]  dark:border-[#5a5a5a] border-b-[1px] group   border-[#e6e6e6] group text-left  text-sm text-[#3b3b3b] py-2">
                <td class="dark:text-[#f2f2f2]  py-2 text-[#3b3b3b] font-semibold  px-4">
                  JHDDC021
                </td>
                <td class="  py-2  px-4">PlayStation</td>
                <td class="px-4 py-2 ">Emma</td>
                <td class="px-4 py-2 ">Barcelona</td>
                <td class=" py-2  flex justify-center items-center ">
                  <div class=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr class=" group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td class="dark:text-[#f2f2f2]  dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4">
                  POIBVV021
                </td>
                <td class="dark:bg-[#5a5a5a] px-4 even:bg-[#ebf4fe] py-2">
                  Coffee Machine
                </td>
                <td class="px-4 dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2">
                  William
                </td>
                <td class="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  Rio
                </td>
                <td class="dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 flex justify-center items-center ">
                  <div class=" rounded-3xl dark:bg-[#f2f2f2] text-[#a51f1fd6] bg-[#f70a0a69] px-4">
                    Cancel
                  </div>
                </td>
              </tr>

              <tr class=" dark:text-[#f2f2f2] dark:border-[#5a5a5a] border-b-[1px] group   border-[#e6e6e6] group text-left  text-sm text-[#3b3b3b] py-2">
                <td class="dark:text-[#f2f2f2]  py-2 text-[#3b3b3b] font-semibold  px-4">
                  ZSDFCV201
                </td>
                <td class="  py-2  px-4">Nike Air Max</td>
                <td class="px-4 py-2 ">Sophia</td>
                <td class="px-4 py-2 ">Dubai</td>
                <td class=" py-2  flex justify-center items-center ">
                  <div class=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr class=" group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td class="dark:text-[#f2f2f2]  dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4">
                  MLYTRV01
                </td>
                <td class="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  GoPro Camera
                </td>
                <td class="px-4 dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2">
                  James
                </td>
                <td class="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  London
                </td>
                <td class="dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 flex justify-center items-center ">
                  <div class=" rounded-3xl dark:bg-[#f2f2f2] text-[#9f9300] bg-[#e3d20863] px-4">
                    Pending
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>`,
  },
];

export default tableLightData;
