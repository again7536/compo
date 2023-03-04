import styled from "@emotion/styled";
import { useState } from "react";

type CardImageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  src: string;
};

type CardImageStatus = "load" | "error" | "done";

const CardBodyTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.size[3]};
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  gap: 0 5px;
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 190px;

  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.linen};

  overflow: hidden;
`;

const CardImageImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;

  border: none;
  outline: none;
`;

const CardImage = ({ src, ...props }: CardImageProps) => {
  const [status, setStatus] = useState<CardImageStatus>("load");

  return (
    <CardImageWrapper {...props}>
      <CardImageImg
        src={status !== "error" ? src : "https://picsum.photos/300/200"}
        // visible={status === "done"}
        onLoad={() => status === "load" && setStatus("done")}
        onError={() => setStatus("error")}
      />
    </CardImageWrapper>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  width: 290px;
  padding: 10px;
`;

export { Card, CardImage, CardBody, CardBodyTitle };
