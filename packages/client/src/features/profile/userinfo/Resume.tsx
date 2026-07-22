import { api } from "@/axios";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function Resume({ data }: any) {
  const [pdf, setPdf] = useState("");
  const loadResume = () => {
    api.post("/profile/resume", data).then((res) => {
      setPdf(res.data.pdf);
    });
  };
  return (
    <div>
      <Button onClick={loadResume}>Resume</Button>

      {pdf && <iframe className="fixed left-0 top-0 w-full h-full z-50" src={pdf}></iframe>}
    </div>
  );
}

export default Resume;
