import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-primary-200s">Loading cabin data....</p>
    </div>
  );
}
