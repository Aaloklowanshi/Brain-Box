import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqsection: React.FC = () => {
  return (
    <div className="w-full px-4 py-8 md:py-16 lg:py-24 xl:py-20">
      <div className="container mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How are the classes conducted ? </AccordionTrigger>
            <AccordionContent>
            They are conducted one on one via zoom.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is the duration of one class? </AccordionTrigger>
            <AccordionContent>
            One class longs for around 50-60 minutes
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger> How are parents updated about the child? </AccordionTrigger>
            <AccordionContent>
            Monthly parent teacher meetings are done and we provide the success graph at the end of month. Daily class reports are shared to parents.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>what if we are unable to attend a session?  </AccordionTrigger>
            <AccordionContent>
            if from either side from the tutor or from the student there is an unavoidable situation and the class has to be missed we can be flexible and reschedule it within the same week.            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>what if my kid is unable to understand with the tutor?   </AccordionTrigger>
            <AccordionContent>
            although we make sure that our tutors are well trained but if still the kid and hence we provide first 2 sessions free so that the kid can make decisions and choose their tutor.  </AccordionContent>
              </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqsection;
