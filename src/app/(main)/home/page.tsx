// import { useAppSelector, useAppDispatch } from "@/lib/hook";
// import { setNavigation } from "@/lib/features/navigation/navigationSlice";
// import { Button } from "@/components/ui/button";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  // const navigation = useAppSelector((state) => state.navigation.value);
  // const dispatch = useAppDispatch();
  // console.log({ navigation });

  // const handleClick = () => {
  //   dispatch(setNavigation("click"));
  // };
  return (
    <div className="mx-4 flex-1 rounded-lg h-full bg-[#fff] p-12">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Welcome Samuel!</h1>
        <div className="w-[40%] flex items-center gap-4">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#949494"
                  d="M12 2a7 7 0 0 0-7 7v3.528a1 1 0 0 1-.105.447l-1.717 3.433A1.1 1.1 0 0 0 4.162 18h15.676a1.1 1.1 0 0 0 .984-1.592l-1.716-3.433a1 1 0 0 1-.106-.447V9a7 7 0 0 0-7-7m0 19a3.001 3.001 0 0 1-2.83-2h5.66A3.001 3.001 0 0 1 12 21"
                />
              </g>
            </svg>
            <div className="absolute right-0 top-0 bg-red-500 h-4 w-4 rounded-full flex items-center justify-center">
              <p className="font-bold text-[#fff] text-xs">4</p>
            </div>
          </div>
          <Input
            type="text"
            placeholder="Search for available doctors "
            className=" h-12 rounded-full px-8 text-md"
          />
        </div>
      </div>

      <div className="py-16  h-full">
        <div className="h-[30%] w-full border bg-green-700 rounded-lg flex items-center justify-center">
          <div className="">
            <h2 className="text-4xl text-white leading-normal relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="absolute top-0 -left-12"
              >
                <path
                  fill="white"
                  d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789M20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2"
                />
              </svg>
              Drink plenty of water to help manage migraines.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="absolute bottom-0 -right-12"
              >
                <path
                  fill="white"
                  d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292"
                />
              </svg>
            </h2>
          </div>
        </div>
        <div className="flex-1 h-[70%] w-full py-12 flex justify-between gap-12 ">
          <div
            className=" flex-1 flex-col space-y-8 flex items-center justify-center rounded-lg"
            style={{
              MozBoxShadow: "0 0 12px #ccc",
              WebkitBoxShadow: "0 0 12px #ccc",
              boxShadow: "0 0 12px #ccc",
            }}
          >
            <p className="text-xl text-center text-gray-500">
              There are no upcoming <br /> appointments for now.
            </p>
            <Button className="rounded-full px-8 py-6 text-md">
              Request an appointment
            </Button>
          </div>

          <div
            className="flex-1 flex items-center  justify-center"
            style={{
              MozBoxShadow: "0 0 12px #ccc",
              WebkitBoxShadow: "0 0 12px #ccc",
              boxShadow: "0 0 12px #ccc",
            }}
          >
            <p className="text-xl text-center text-gray-500">
              There are no <br /> activities for now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
