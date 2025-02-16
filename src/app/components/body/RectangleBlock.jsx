"use strict";

export default function RectangleBlock({ imageSubtitle }) {
  return (
    <div className="flex flex-col w-full h-full my-6 items-center">
      <div className="rounded-lg shadow-custom-shadow z-10 bg-gradient-to-b from-secondaryColor to-foreground h-96 w-full"></div>
      <p className="text-white font-semibold p-3 text-2xl text-center">
        {imageSubtitle ?? "Loading text"}
      </p>
    </div>
  );
}
