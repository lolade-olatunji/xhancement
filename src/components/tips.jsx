import React, { useState } from "react";
import "../styles/tips.css";

const FAQItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleAnswer}>
        <span className="ques">
          {question}
        </span>
        <span className="ans">
          {showAnswer ? "▼" : "►"}
        </span>
      </div>
      {showAnswer &&
        <div className="answer">
          {answer}
        </div>}
    </div>
  );
};

const FAQSection = () => {
  return <div className="faq-section">
      <FAQItem question="1. Stretching exercises" answer="To perform a penis enlargement exercise:
        Begin by achieving a semi-erect state. 
For added comfort, apply a lubricant – although it is important to remember that the goal of stretching the penis isn’t masturbation.
Create a circle by connecting the tip of your index finger and thumb.
Place your semi-erect penis shaft through the circle, while gripping the base of your penis in the stretched position for 30 seconds, using only the fingers you’ve created the circle with.
Slowly close the circle you’ve created by connecting the tip of your finger and thumb, gently applying pressure to the penis shaft within.
In a milking motion, stroke the penis shaft slowly, relieving the pressure as you get to the crown of the penis head. The stroking motion itself should be applied at a steady pace.
Release and return your index finger-thumb circle to the base of the shaft and repeat the process. The duration of your penis stretching shouldn’t exceed 20 minutes." />

      <FAQItem question="2. Penis pumps" answer="Like most natural penis enhancement methods, a penis pump is a penis enlargement device, designed to improve blood flow. Penis pump results are promising, aiding in temporarily increasing the girth and size of the penis. In order to maintain the effects of a pumping device, sexually arousal must be maintained. 

Also known as a vacuum pump, it is inserted over the penis, and uses suction to draw blood into the penis to allow a man to achieve an erection. Although the usage of these erection-aids cannot permanently increase the size of the penis, pumps facilitate a firmer, harder erection." />

      <FAQItem question="3. Natural penis enlargement pills" answer="By improving blood flow to the penis, they can help to get bigger erections if poor blood flow is preventing you reach maximum potential.

So what about natural penis enlargement pills? our supplements can offer natural penis growth benefits, herbs in this supplements enhance results, such herbs are:  
1. Ginseng: When taken regularly, ginseng is capable of improving blood flow and aiding in the maintenance of testosterone levels.
2. Pine pollen: Rich in vitamins and minerals, this traditional Chinese remedy is purported to increase blood flow to the penis and is one of the first and most powerful libido boosters ever discovered.
3. Yohimbine: The bark of an evergreen tree found in central and Western Africa has been used to treat ED for centuries. It is believed to stimulate the release of the hormones epinephrine and norepinephrine, which hinder the effects of body chemicals and agents that constrict erection-aiding blood vessels in the penis.
4. Maca: Recognised as a sexual booster, this Peruvian plant is said to increase libido and sperm count. Maca is also celebrated for its ability to combat the effects of erectile dysfunction.
5. Ginkgo and horny goat weed: By dilating blood vessels, ginkgo improves blood flow to the penis. An age-old remedy used in Chinese medicine for thousands of years, horny goat weed acts in a similar way, by reversing the effects of an enzyme that inhibits blood flow to the penis." />

      <FAQItem question="4. Pelvic floor exercises." answer="Also known as Kegels, performing exercises for your pelvic floor muscle group promotes blood flow to the cavities of your penis, resulting in a more rigid erection. As outlined by Harvard Health, here are the step-by-step instructions for performing Kegels:

1. Locate your pelvic muscles: For men, this can be accomplished by pretending to avoid passing gas or pretending to halt your stream during urination.
2. Practice contractions: Lie on your back and feel the contraction of your pelvic muscles. Gradually increase the duration of your contractions, beginning with 3 to 5 seconds of contraction, followed by 3 to 5 seconds of relaxation. Repeat this cycle 10 times.
3. Keep your other muscles relaxed. Don’t allow the contraction of your pelvic muscles to extend to the buttocks or the abdomen. Keep all other muscles in a relaxed position while you work to isolate your pelvic muscles.
4. Increase the duration: Work your way up to 10 second contractions.
5. Practice: Be diligent about performing your exercises and attempt to fit in 30 to 40 contractions per day.

Strong pelvic floor muscles go a long way towards staving off the effects of incontinence, and could help you achieve a more robust, rigid erection." />
      <FAQItem question="5. Penis extenders" answer="To successfully use a penis extender: 

1. Begin with a flaccid (under 20% firmness is recommended) penis.
2. Fit the loop of the device over the shaft of your penis and secure it against the base.
3. Secure the top part of the shaft against the device’s gripping mechanism.
4. Hook the gripping mechanism up to the pulling belt.
5. Once attached, begin lightly pulling and allow the device to gradually extend the penis shaft within the device.
6. The optimal tension for a penis enlargement device is described as allowing the full lengthening of your penis naturally, plus a little more. Too much tension could potentially damage the skin of the shaft, so begin with a ‘less is more’ approach." />
      <FAQItem question="6. Lose Weight" answer="The appearance of a large belly that hangs over the penis can overshadow or mask a man’s true size, creating the impression that the penis is smaller than it actually is. " />
      <FAQItem question="7. Trim your pubic hair" answer="Similar to the act of losing excess body fat, trimming your pubic hair will allow you to reveal the true dimensions of your penis. The removal of hair from around the base of your penis could aid the impression of increased size, making this simple grooming technique an effective way to assist the presentation of your member." />
      <FAQItem question="8. Penis rings" answer="The differing types of penis rings includes:

1. Cock ring: Perhaps the greatest tool in terms of rings designed to aid in the overall appearance of an engorged member, this ring fits on the base of the penis. Before you put on a cock ring, you must make sure you have an erection. You then slide the ring over the head of your penis and roll it down to your penis base.
2. Penoscrotal ring: These rings fits around the base of the penis and testicles. For these rings, your penis should be flaccid before fitting. Begin by placing your testicles in the ring one by one and then your penis in the ring by folding it back towards it. Then put the head of your penis through first and then pull the shaft through. The ring should sit at the base of your penis and testicles.
3. Testicle ring: As indicated, this type of ring fits around the testicles. You place your testicles in the ring one by one and the ring sits on the top of your testicles.
Do not use a cock ring for longer than 30 minutes. Some men couple a penis ring with a hot shower or bath before sex, in order to increase the blood flow to the penis." />
      <FAQItem question="9. Pay attention to your partner" answer="Every individual is unique, and what works for one person may not work for another, what one person have is what another is lacking. Spend time learning what your partner enjoys. Pay attention to their reactions and adjust your approach based on their feedback." />
      <FAQItem question="10. Get more help if you need it" answer="Remember, the size of your penis is just one aspect of your sexual identity, and it’s often not as important to your partner as you might think. Focusing on the overall experience and mutual satisfaction can lead to a more fulfilling and enjoyable sexual relationship for both of you, grab your sex toys!!!" />
    </div>;
};

export default FAQSection;
