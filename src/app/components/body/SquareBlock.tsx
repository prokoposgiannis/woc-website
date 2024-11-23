"use strict";

export default function SquareBlock({ imageSubtitle }) {
  return (
    <div className="flex flex-col w-1/3 px-3 items-center">
      <div className="rounded-lg shadow-md z-10 bg-gradient-to-b from-secondaryColor to-foreground h-96 w-full"></div>
      <p className="text-white p-3 text-2xl text-center">
        {imageSubtitle ?? "Loading text"}
      </p>
    </div>
  );
}
