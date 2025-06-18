import TrailerModal from "@/components/modals/TrailerModal";

const Trailers = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Trailers</h1>
        <p className="text-muted-foreground text-sm text-balance">
          View and manage all trailers in the system or add a new trailer as
          needed.
        </p>
      </div>
      <TrailerModal />
    </div>
  );
};

export default Trailers;
