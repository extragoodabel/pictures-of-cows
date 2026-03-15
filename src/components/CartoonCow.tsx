import './CartoonCow.css';

export type CowPose =
  | 'correct-liked'   // heart eyes + thumbs up
  | 'correct-not-liked' // hooves x
  | 'incorrect-said-no'  // shrug
  | 'incorrect-said-yes' // arms crossed
  | 'excellent'       // same as correct-liked
  | 'good'            // thumbs up, regular eyes
  | 'medium'          // same as incorrect-said-no (shrug)
  | 'poor';           // same as incorrect-said-yes (arms crossed)

type CartoonCowProps = {
  variant: CowPose;
  size?: 'default' | 'hero';
};

export function CartoonCow({ variant, size = 'default' }: CartoonCowProps) {
  const showHeartEyes = variant === 'correct-liked' || variant === 'excellent';
  const showThumbsUp = variant === 'correct-liked' || variant === 'excellent' || variant === 'good';
  const showHoovesX = variant === 'correct-not-liked';
  const showShrug = variant === 'incorrect-said-no' || variant === 'medium';
  const showArmsCrossed = variant === 'incorrect-said-yes' || variant === 'poor';

  return (
    <div className={`cartoon-cow cartoon-cow--${size}`}>
      <div className="cartoon-cow__illustration">
        <div className="cartoon-cow__body">
          <div className="cartoon-cow__spot cartoon-cow__spot--1" />
          <div className="cartoon-cow__spot cartoon-cow__spot--2" />
          <div className="cartoon-cow__spot cartoon-cow__spot--3" />
        </div>
        <div className="cartoon-cow__head">
          <div className="cartoon-cow__ear cartoon-cow__ear--left" />
          <div className="cartoon-cow__ear cartoon-cow__ear--right" />
          {showHeartEyes ? (
            <div className="cartoon-cow__heart-eyes">
              <div className="cartoon-cow__heart cartoon-cow__heart--left" />
              <div className="cartoon-cow__heart cartoon-cow__heart--right" />
            </div>
          ) : (
            <>
              <div className="cartoon-cow__eye cartoon-cow__eye--left" />
              <div className="cartoon-cow__eye cartoon-cow__eye--right" />
            </>
          )}
          <div className="cartoon-cow__muzzle" />
        </div>
        {showHoovesX && (
          <div className="cartoon-cow__hooves-x">
            <div className="cartoon-cow__hoof cartoon-cow__hoof--tl" />
            <div className="cartoon-cow__hoof cartoon-cow__hoof--tr" />
            <div className="cartoon-cow__hoof cartoon-cow__hoof--bl" />
            <div className="cartoon-cow__hoof cartoon-cow__hoof--br" />
          </div>
        )}
        {showThumbsUp && (
          <div className="cartoon-cow__thumbs-up" />
        )}
        {showShrug && (
          <div className="cartoon-cow__shrug">
            <div className="cartoon-cow__hoof cartoon-cow__hoof--l" />
            <div className="cartoon-cow__hoof cartoon-cow__hoof--r" />
          </div>
        )}
        {showArmsCrossed && (
          <div className="cartoon-cow__arms-crossed">
            <div className="cartoon-cow__hoof cartoon-cow__hoof--l" />
            <div className="cartoon-cow__hoof cartoon-cow__hoof--r" />
          </div>
        )}
      </div>
    </div>
  );
}
