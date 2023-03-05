import styled from "@emotion/styled";
import { useState } from "react";
import { Skeleton } from "../Skeleton/Skeleton";

type CardImageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  src: string;
  fallbackSrc?: string;
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
  position: relative;

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
}

`;

const CardImage = ({
  src,
  fallbackSrc = "https://picsum.photos/300/200",
  ...props
}: CardImageProps) => {
  const [status, setStatus] = useState<CardImageStatus>("load");

  return (
    <CardImageWrapper {...props}>
      <CardImageImg
        src={status !== "error" ? src : fallbackSrc}
        alt=""
        onLoad={() => status === "load" && setStatus("done")}
        onError={() => setStatus("error")}
      />
      {status === "load" && <Skeleton width="100%" height="100%" />}
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
