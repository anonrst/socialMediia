import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="text-center">
        <Loader2 size={48} className="animate-spin text-primary mb-3" />
        <p className="text-muted mb-0">Loading posts...</p>
      </div>
    </div>
  );
};

export default Loading