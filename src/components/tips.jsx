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
      <FAQItem question="1. Stretching exercises" answer="To perform a pen* enlargement exercise:
        Begin by achieving a semi-erect state. 
For added comfort, apply a lubricant – although it is important to remember that the goal of stretching the pen* isn’t masturbation.
Create a circle by connecting the tip of your index finger and thumb.
Place your semi-erect pen* shaft through the circle, while gripping the base of your pen* in the stretched position for 30 seconds, using only the fingers you’ve created the circle with.
Slowly close the circle you’ve created by connecting the tip of your finger and thumb, gently applying pressure to the pen* shaft within.
In a milking motion, stroke the pen* shaft slowly, relieving the pressure as you get to the crown of the pen* head. The stroking motion itself should be applied at a steady pace.
Release and return your index finger-thumb circle to the base of the shaft and repeat the process. The duration of your pen* stretching shouldn’t exceed 20 minutes." />

      <FAQItem question="2.Pumps" answer="Like most natural enhancement methods, a pen* pump is a pen* enlargement device, designed to improve blood flow. Pen* pump results are promising, aiding in temporarily increasing the girth and size of the pen*. In order to maintain the effects of a pumping device, sexually arousal must be maintained. 

Also known as a vacuum pump, it is inserted over the pen*, and uses suction to draw blood into the pen* to allow a man to achieve an erection. Although the usage of these erection-aids cannot permanently increase the size of the pen*, pumps facilitate a firmer, harder erection." />

      <FAQItem question="3. Natural pen* enlargement pills" answer="By improving blood flow to the pen*, they can help to get bigger erections if poor blood flow is preventing you reach maximum potential.

So what about natural pen* enlargement pills? our supplements can offer natural pen* growth benefits, herbs in this supplements enhance results, such herbs are:  
1. Ginseng: When taken regularly, ginseng is capable of improving blood flow and aiding in the maintenance of testosterone levels.
2. Pine pollen: Rich in vitamins and minerals, this traditional Chinese remedy is purported to increase blood flow to the pen* and is one of the first and most powerful libido boosters ever discovered.
3. Yohimbine: The bark of an evergreen tree found in central and Western Africa has been used to treat ED for centuries. It is believed to stimulate the release of the hormones epinephrine and norepinephrine, which hinder the effects of body chemicals and agents that constrict erection-aiding blood vessels in the pen*.
4. Maca: Recognised as a sexual booster, this Peruvian plant is said to increase libido and sperm count. Maca is also celebrated for its ability to combat the effects of erectile dysfunction.
5. Ginkgo and horny goat weed: By dilating blood vessels, ginkgo improves blood flow to the pen*. An age-old remedy used in Chinese medicine for thousands of years, horny goat weed acts in a similar way, by reversing the effects of an enzyme that inhibits blood flow to the pen*." />

      <FAQItem question="4. Pelvic floor exercises." answer="Also known as Kegels, performing exercises for your pelvic floor muscle group promotes blood flow to the cavities of your pen*, resulting in a more rigid erection. As outlined by Harvard Health, here are the step-by-step instructions for performing Kegels:

1. Locate your pelvic muscles: For men, this can be accomplished by pretending to avoid passing gas or pretending to halt your stream during urination.
2. Practice contractions: Lie on your back and feel the contraction of your pelvic muscles. Gradually increase the duration of your contractions, beginning with 3 to 5 seconds of contraction, followed by 3 to 5 seconds of relaxation. Repeat this cycle 10 times.
3. Keep your other muscles relaxed. Don’t allow the contraction of your pelvic muscles to extend to the buttocks or the abdomen. Keep all other muscles in a relaxed position while you work to isolate your pelvic muscles.
4. Increase the duration: Work your way up to 10 second contractions.
5. Practice: Be diligent about performing your exercises and attempt to fit in 30 to 40 contractions per day.

Strong pelvic floor muscles go a long way towards staving off the effects of incontinence, and could help you achieve a more robust, rigid erection." />
      <FAQItem question="5. pen* extenders" answer="To successfully use a pen* extender: 

1. Begin with a flaccid (under 20% firmness is recommended) pen*.
2. Fit the loop of the device over the shaft of your pen* and secure it against the base.
3. Secure the top part of the shaft against the device’s gripping mechanism.
4. Hook the gripping mechanism up to the pulling belt.
5. Once attached, begin lightly pulling and allow the device to gradually extend the pen* shaft within the device.
6. The optimal tension for a pen* enlargement device is described as allowing the full lengthening of your pen* naturally, plus a little more. Too much tension could potentially damage the skin of the shaft, so begin with a ‘less is more’ approach." />
      <FAQItem question="6. Lose Weight" answer="The appearance of a large belly that hangs over the pen* can overshadow or mask a man’s true size, creating the impression that the pen* is smaller than it actually is. " />
      <FAQItem question="7. Trim your pubic hair" answer="Similar to the act of losing excess body fat, trimming your pubic hair will allow you to reveal the true dimensions of your pen*. The removal of hair from around the base of your pen* could aid the impression of increased size, making this simple grooming technique an effective way to assist the presentation of your member." />
      <FAQItem question="8. pen* rings" answer="The differing types of pen* rings includes:

1. Cock ring: Perhaps the greatest tool in terms of rings designed to aid in the overall appearance of an engorged member, this ring fits on the base of the pen*. Before you put on a cock ring, you must make sure you have an erection. You then slide the ring over the head of your pen* and roll it down to your pen* base.
2. Penoscrotal ring: These rings fits around the base of the pen* and testicles. For these rings, your pen* should be flaccid before fitting. Begin by placing your testicles in the ring one by one and then your pen* in the ring by folding it back towards it. Then put the head of your pen* through first and then pull the shaft through. The ring should sit at the base of your pen* and testicles.
3. Testicle ring: As indicated, this type of ring fits around the testicles. You place your testicles in the ring one by one and the ring sits on the top of your testicles.
Do not use a cock ring for longer than 30 minutes. Some men couple a pen* ring with a hot shower or bath before sex, in order to increase the blood flow to the pen*." />
      <FAQItem question="9. Pay attention to your partner" answer="Every individual is unique, and what works for one person may not work for another, what one person have is what another is lacking. Spend time learning what your partner enjoys. Pay attention to their reactions and adjust your approach based on their feedback." />
      <FAQItem question="10. Get more help if you need it" answer="Remember, the size of your pen* is just one aspect of your sexual identity, and it’s often not as important to your partner as you might think. Focusing on the overall experience and mutual satisfaction can lead to a more fulfilling and enjoyable sexual relationship for both of you, grab your sex toys!!!" />
    </div>;
};

export default FAQSection;
