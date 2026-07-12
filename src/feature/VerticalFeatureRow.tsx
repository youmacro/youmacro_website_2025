import Image from 'next/image';
import { useState } from 'react';

type IVerticalFeatureRowProps = {
  category: string;
  command?: string;
  description: string;
  highlights?: string[];
  iframeSrc: string;
  index: string;
  poster: string;
  reverse?: boolean;
  title: string;
};

const FeatureDemo = ({
  iframeSrc,
  poster,
  title,
}: Pick<IVerticalFeatureRowProps, 'iframeSrc' | 'poster' | 'title'>) => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="feature-demo">
      <div className="feature-demo__chrome">
        <span /><span /><span /><small>YouMacro</small>
      </div>
      <div className="feature-demo__viewport">
        {showDemo ? (
          <>
            <iframe
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
              src={iframeSrc}
              title={`${title} demo`}
            />
            <button
              aria-label={`Close ${title} demo`}
              className="feature-demo__close"
              onClick={() => setShowDemo(false)}
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </>
        ) : (

          <button
            aria-label={`Watch the ${title} demo`}
            className="feature-demo__poster"
            onClick={() => setShowDemo(true)}
            type="button"
          >
            <Image
              alt={`${title} in YouMacro`}
              height={1080}
              loading="lazy"
              sizes="(max-width: 800px) 92vw, 52vw"
              src={poster}
              width={1920}
            />
            <span className="feature-demo__play">
              <span aria-hidden="true" className="feature-demo__play-icon">
                &#9654;
              </span>
              Watch the demo
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => (
  <article className={`feature-row${props.reverse ? ' feature-row--reverse' : ''}`}>
    <div className="feature-row__copy">
      <div className="feature-row__meta">
        <span>{props.index}</span><span>{props.category}</span>
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.command && (
        <div className="command-chip">
          <span>Right-click command</span><code>{props.command}</code>
        </div>
      )}
      {props.highlights && (
        <ul className="feature-highlights">
          {props.highlights.map((highlight) => (
            <li key={highlight}>
              <span aria-hidden="true">&#10003;</span>{highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
    <FeatureDemo
      iframeSrc={props.iframeSrc}
      poster={props.poster}
      title={props.title}
    />
  </article>
);

export { VerticalFeatureRow };
