import type { FaqItem } from "@/types";

/** Shown in the homepage FAQ section. */
export const homeFaqs: FaqItem[] = [
  {
    category: "General",
    question: "Do I need a referral?",
    answer: "No. A referral is not required to book an appointment at Relief Plus Wellness. You can schedule directly with one of our practitioners for Acupuncture, Osteopathy, Cupping Therapy, Wet Cupping (Hijama), Thai Oil Massage, Tuina Massage, Gua Sha, or Brazilian Lymphatic Drainage. For insurance reimbursement, some providers may require a doctor's note depending on your individual plan, so we recommend checking with your insurance company.",
  },
  {
    category: "Booking",
    question: "How do I book an appointment?",
    answer: "Booking is simple. You can schedule your appointment online through our booking system, call our clinic at (416) 461-1118, or visit us in person. We offer convenient appointment times seven days a week for patients throughout Leslieville, East York, The Beaches, Riverdale, Danforth, and surrounding East Toronto communities.",
  },
  {
    category: "Pricing",
    question: "Is direct billing available?",
    answer: "Yes. Relief Plus Wellness offers direct billing for eligible Acupuncture and Osteopathy services with many major insurance providers. Coverage and reimbursement depend on your individual insurance plan and benefits. Our team will do our best to help verify your coverage and make the process as convenient as possible.",
  },
  {
    category: "Treatments",
    question: "What is Hijama (Wet Cupping)?",
    answer: "Hijama, also known as Wet Cupping Therapy or bloodletting cupping, is a traditional therapy that combines suction cups with a controlled superficial skin technique, in which small superficial incisions are made to draw a small, controlled amount of blood. Many patients choose Hijama (bloodletting) as part of their wellness routine and for support with muscle tension, recovery, and overall well-being. All treatments are performed in a professional, clean, and comfortable clinical environment.",
  },
  {
    category: "General",
    question: "Do you offer Acupuncture, Osteopathy, and Hijama at the same clinic?",
    answer: "Yes. Relief Plus Wellness is one of East Toronto's few wellness clinics offering Acupuncture, Osteopathy, Wet Cupping (Hijama), Cupping Therapy, Tuina Massage, Gua Sha, Thai Oil Massage, and Brazilian Lymphatic Drainage under one roof. This allows patients to access multiple wellness services in one convenient location.",
  },
  {
    category: "Booking",
    question: "What should I expect during my first visit?",
    answer: "Your first visit includes a consultation, health history review, and assessment with your practitioner. Based on your goals and individual needs, your practitioner will recommend a personalized treatment plan. We take the time to understand your concerns and provide care tailored to your unique wellness goals.",
  },
  {
    category: "Treatments",
    question: "What conditions can Acupuncture help support?",
    answer: "Acupuncture is commonly chosen by patients seeking support for muscle tension, neck and back discomfort, headaches, stress management, mobility concerns, recovery support, and overall wellness. Every treatment plan is personalized based on the individual's needs and goals.",
  },
  {
    category: "Pricing",
    question: "Is Osteopathy covered by insurance?",
    answer: "Coverage for Osteopathic Therapy varies by insurance provider and plan. Some extended health benefit plans may provide coverage when services are performed by eligible practitioners. We recommend contacting your insurance provider directly to confirm your specific coverage details.",
  },
  {
    category: "Treatments",
    question: "What are Tuina Massage and Gua Sha?",
    answer: "Tuina Massage is a hands-on therapeutic treatment that uses specialized massage techniques to help improve mobility, reduce muscle tension, and support overall wellness. Gua Sha involves gentle scraping techniques applied to the skin using a smooth-edged tool. These therapies are commonly used alongside Acupuncture as part of a comprehensive wellness treatment plan.",
  },
  {
    category: "General",
    question: "Do you serve patients from Leslieville, The Beaches, East York, and Riverdale?",
    answer: "Yes. Relief Plus Wellness proudly serves patients from Leslieville, The Beaches, East York, Riverdale, Danforth, Greenwood-Coxwell, Upper Beaches, and surrounding East Toronto communities. Our clinic is conveniently located at 1403 Gerrard Street East, Toronto, with online booking and flexible appointment availability seven days a week. We also offer translation support for patients who prefer to communicate in another language.",
  },
  {
    category: "Treatments",
    question: "What is the difference between Wet Cupping (Hijama) and Cupping Therapy?",
    answer: "Wet Cupping (Hijama) and Cupping Therapy both use suction cups as part of treatment. Wet Cupping (Hijama) involves additional specialized techniques, while traditional Cupping Therapy uses suction alone. During your consultation, your practitioner can help determine which treatment may be most appropriate based on your individual needs and wellness goals.",
  },
];

/** Full list, organized by category, shown on the dedicated /faq page. */
export const faqs: FaqItem[] = [
  // General
  {
    category: "General",
    question: "Do I need a referral to book an appointment?",
    answer: "No referral is required to book an appointment at Relief Plus Wellness. You can schedule directly with one of our practitioners for Acupuncture, Osteopathic Therapy, Wet Cupping (Hijama), Cupping Therapy, and our other wellness services.",
  },
  {
    category: "General",
    question: "Can I book online?",
    answer: "Yes. You can book online in just a few taps through our website, or contact our clinic directly if you'd prefer to schedule by phone.",
  },
  {
    category: "General",
    question: "Do you accept walk-in appointments?",
    answer: "Walk-in appointments are welcome, subject to practitioner availability. We recommend calling ahead to check current availability before stopping by.",
  },
  {
    category: "General",
    question: "Do you offer same-day appointments?",
    answer: "Same-day appointments may be available based on schedule availability.",
  },
  {
    category: "General",
    question: "What languages are available?",
    answer: "We offer translation support for patients who prefer to communicate in another language. Please let us know your preferred language when booking so we can better accommodate you.",
  },
  {
    category: "General",
    question: "What is your cancellation policy?",
    answer: "We kindly ask for as much notice as possible if you need to reschedule or cancel your appointment. Please contact our clinic directly for the full details of our cancellation policy.",
  },
  // Cupping Therapy FAQs
{
  category: "Cupping Therapy",
  question: "What is Cupping Therapy?",
  answer:
    "Cupping Therapy is a traditional treatment that uses suction cups placed on the skin to improve blood circulation, reduce muscle tension, relieve pain, and support the body's natural healing process.",
},
{
  category: "Cupping Therapy",
  question: "What are the benefits of Cupping Therapy?",
  answer: "Cupping Therapy may help:",
  bulletPoints: [
    "Relieve muscle pain and stiffness",
    "Reduce neck, shoulder, and back pain",
    "Improve blood circulation",
    "Decrease inflammation",
    "Speed up muscle recovery",
    "Promote relaxation and stress relief",
  ],
},
{
  category: "Cupping Therapy",
  question: "Does Cupping Therapy hurt?",
  answer:
    "Most people find cupping comfortable and relaxing. You may feel a gentle pulling or tightening sensation as the cups create suction, but it should not be painful.",
},
{
  category: "Cupping Therapy",
  question: "Will Cupping Therapy leave marks?",
  answer:
    "Yes. Cupping often leaves circular red or purple marks where the cups were placed. These marks are not bruises and usually fade within 3 to 10 days, depending on your body and the intensity of the treatment.",
},
{
  category: "Cupping Therapy",
  question: "What conditions can Cupping Therapy help treat?",
  answer: "Cupping Therapy may help with:",
  bulletPoints: [
    "Back pain",
    "Neck and shoulder tension",
    "Sciatica",
    "Sports injuries",
    "Muscle tightness",
    "Headaches and migraines",
    "Stress-related tension",
    "General muscle recovery",
  ],
},
{
  category: "Cupping Therapy",
  question: "How long does a Cupping Therapy session last?",
  answer:
    "Appointments are available in 30-minute and 60-minute sessions, depending on your needs and treatment plan.",
},
{
  category: "Cupping Therapy",
  question: "Is Cupping Therapy safe?",
  answer:
    "Yes. Cupping Therapy is generally safe when performed by a trained practitioner using clean, professional equipment and proper techniques.",
},
{
  category: "Cupping Therapy",
  question: "Who should avoid Cupping Therapy?",
  answer: "Cupping may not be suitable if you:",
  bulletPoints: [
    "Are pregnant (certain areas should be avoided)",
    "Have open wounds or skin infections",
    "Have severe eczema or psoriasis in the treatment area",
    "Have a bleeding disorder",
    "Take blood-thinning medications",
    "Please let your practitioner know about any medical conditions before treatment.",
  ],
},
{
  category: "Cupping Therapy",
  question: "What should I do after Cupping Therapy?",
  answer: "After your treatment:",
  bulletPoints: [
    "Drink plenty of water.",
    "Avoid strenuous exercise for 24 hours.",
    "Keep the treated area warm.",
    "Avoid hot showers, saunas, and alcohol for several hours after your session.",
  ],
},
{
  category: "Cupping Therapy",
  question: "How often should I have Cupping Therapy?",
  answer:
    "The ideal frequency depends on your condition. Some clients benefit from occasional treatments for maintenance, while others may need weekly sessions initially. Your practitioner will recommend a treatment plan based on your goals.",
},
{
  category: "Cupping Therapy",
  question: "Can Cupping Therapy be combined with other treatments?",
  answer:
    "Yes. Cupping Therapy is often combined with massage therapy, acupuncture, Tuina Massage, and other wellness treatments to improve overall results.",
},
{
  category: "Cupping Therapy",
  question: "Is Cupping Therapy covered by insurance?",
  answer:
    "Coverage depends on your insurance provider and whether the treatment is performed by a registered healthcare professional. We recommend checking your insurance plan for details.",
},
// Tuina Massage & Gua Sha FAQs
{
  category: "Tuina Massage & Gua Sha",
  question: "What is Tuina Massage?",
  answer:
    "Tuina Massage is a traditional Chinese therapeutic massage that uses rhythmic pressure, stretching, and joint mobilization to improve circulation, relieve muscle tension, reduce pain, and restore the body's natural balance.",
},
{
  category: "Tuina Massage & Gua Sha",
  question: "What is Gua Sha?",
  answer:
    "Gua Sha is a traditional healing technique that involves gently scraping the skin with a smooth-edged tool to improve blood circulation, release muscle tension, reduce inflammation, and promote healing.",
},
{
  category: "Tuina Massage & Gua Sha",
  question: "What conditions can Tuina Massage help with?",
  answer: "Tuina Massage may help with:",
  bulletPoints: [
    "Neck and shoulder pain",
    "Back pain",
    "Sciatica",
    "Muscle stiffness",
    "Sports injuries",
    "Headaches",
    "Stress and tension",
    "Limited mobility",
  ],
},
{
  category: "Tuina Massage & Gua Sha",
  question: "Does Gua Sha leave marks?",
  answer:
    'Yes. Gua Sha often leaves temporary red or purple marks called "sha." These marks are not bruises and usually fade within 3 to 7 days as circulation improves.',
},
{
  category: "Tuina Massage & Gua Sha",
  question: "Does Tuina Massage or Gua Sha hurt?",
  answer:
    "Most people find both treatments comfortable and relaxing. Some areas of tight muscles may feel tender during treatment, but the pressure can always be adjusted to your comfort level.",
},
{
  category: "Tuina Massage & Gua Sha",
  question: "What should I wear to my appointment?",
  answer:
    "Wear comfortable, loose-fitting clothing. Depending on the area being treated, you may be asked to change into a gown or expose only the area requiring treatment while maintaining your privacy.",
},
{
  category: "Tuina Massage & Gua Sha",
  question: "How long is a treatment session?",
  answer:
    "Appointments are available in 60-minute and 90-minute sessions, depending on your needs and treatment goals.",
},
{
  category: "Tuina Massage & Gua Sha",
  question: "Is Tuina Massage safe?",
  answer:
    "Yes. Tuina Massage is generally safe when performed by a trained practitioner. Before your session, we'll review your medical history to ensure the treatment is appropriate for you.",
},
{
  category: "Tuina Massage & Gua Sha",
  question: "Who should avoid Gua Sha?",
  answer: "Gua Sha may not be recommended if you:",
  bulletPoints: [
    "Have a bleeding disorder",
    "Take blood-thinning medication",
    "Have open wounds or skin infections",
    "Have severe sunburn or fragile skin",
    "Recently had surgery in the treatment area",
    "Please let your practitioner know about any medical conditions before your appointment.",
  ],
},
{
  category: "Tuina Massage & Gua Sha",
  question: "How many treatments will I need?",
  answer:
    "Some clients experience relief after one session, while chronic conditions often benefit from a series of treatments. Your practitioner will recommend a personalized treatment plan.",
},
{
  category: "Tuina Massage & Gua Sha",
  question: "Can Tuina Massage be combined with acupuncture?",
  answer:
    "Yes. Tuina Massage and Gua Sha are often combined with acupuncture and other Traditional Chinese Medicine therapies to enhance treatment results.",
},
{
  category: "Tuina Massage & Gua Sha",
  question: "What should I do after my treatment?",
  answer: "After your appointment:",
  bulletPoints: [
    "Drink plenty of water.",
    "Avoid strenuous exercise for the rest of the day.",
    "Keep the treated area warm.",
    "If you receive Gua Sha, avoid sun exposure until the marks have faded.",
  ],
},
{
  category: "Shiatsu massage ( Japanese Acupressure )",
  question: "What is Shiatsu massage ( Japanese Acupressure )?",
  answer:
    "Shiatsu is a traditional Japanese massage that uses finger pressure, palm pressure, gentle stretching, and joint mobilization along the body's energy pathways to promote relaxation and support overall wellness.",
},
{
  category: "Shiatsu massage ( Japanese Acupressure )",
  question: "Does Shiatsu massage ( Japanese Acupressure ) hurt?",
  answer:
    "Shiatsu is generally comfortable and relaxing. Pressure is adjusted to your comfort level, and your therapist will communicate with you throughout the session.",
},
{
  category: "Shiatsu massage ( Japanese Acupressure )",
  question: "Do I need to remove my clothing?",
  answer:
    "Shiatsu can be performed while wearing loose, comfortable clothing. Depending on your treatment plan, your practitioner will explain the most appropriate approach before your session.",
},
{
  category: "Shiatsu massage ( Japanese Acupressure )",
  question: "What should I wear?",
  answer:
    "Loose, comfortable clothing is recommended if the treatment is performed fully clothed. If massage oil is incorporated, appropriate draping will be provided to ensure your comfort and privacy.",
},
{
  category: "Shiatsu massage ( Japanese Acupressure )",
  question: "Who can benefit from Shiatsu massage ( Japanese Acupressure )",
  answer:
    "Shiatsu massage ( Japanese Acupressure ) may be suitable for individuals looking to reduce muscle tension, relax, improve flexibility, and support their overall wellness routine.",
},
{
  category: "Shiatsu massage ( Japanese Acupressure )",
  question: "Is Shiatsu massage ( Japanese Acupressure ) covered by insurance?",
  answer:
    "Coverage depends on your insurance plan. If the treatment is provided by a Registered Massage Therapist (RMT), it may be eligible for reimbursement. Please check with your insurance provider for details.",
},
{
  category: "Aromatherapy Massage",
  question: "What is Aromatherapy Massage?",
  answer:
    "Aromatherapy Massage combines professional massage therapy with diluted essential oils applied during treatment or inhaled through their natural aroma to enhance relaxation and overall wellness.",
},
{
  category: "Aromatherapy Massage",
  question: "What essential oils are used?",
  answer:
    "Your practitioner will select high-quality essential oils based on your preferences and wellness goals. Common options include lavender, eucalyptus, peppermint, sweet orange, and bergamot.",
},
{
  category: "Aromatherapy Massage",
  question: "Will the massage oil feel greasy?",
  answer:
    "No. Professional massage oils are formulated to provide smooth glide while absorbing comfortably into the skin.",
},
{
  category: "Aromatherapy Massage",
  question: "Can I choose my scent?",
  answer:
    "Yes. If you have a preferred aroma or wish to avoid certain scents, your therapist will help you choose an appropriate essential oil blend.",
},
{
  category: "Aromatherapy Massage",
  question: "Is Aromatherapy Massage suitable for everyone?",
  answer:
    "Most people can enjoy Aromatherapy Massage. However, if you have allergies, asthma, sensitive skin, are pregnant, or have certain medical conditions, please let your practitioner know before your treatment so the essential oils can be selected appropriately.",
},
{
  category: "Aromatherapy Massage",
  question: "Is Aromatherapy Massage covered by insurance?",
  answer:
    "Insurance coverage depends on your provider and the practitioner's designation. If the massage is performed by a Registered Massage Therapist (RMT), it may be eligible for reimbursement under your plan. Please verify your coverage with your insurance provider.",
},
  // Cosmetic Acupuncture
{
  category: "Cosmetic Acupuncture",
  question: "What is Cosmetic Acupuncture?",
  answer:
    "Cosmetic Acupuncture, also known as Facial Rejuvenation Acupuncture, is a natural treatment that uses ultra-fine needles to stimulate collagen production, improve circulation, and promote healthier, younger-looking skin while supporting overall wellness.",
},
{
  category: "Cosmetic Acupuncture",
  question: "What are the benefits of Cosmetic Acupuncture?",
  answer: "Cosmetic Acupuncture may help:",
  bulletPoints: [
    "Reduce the appearance of fine lines and wrinkles",
    "Improve skin elasticity",
    "Stimulate natural collagen production",
    "Enhance skin tone and texture",
    "Reduce puffiness",
    "Improve facial circulation",
    "Promote a healthy, natural glow",
  ],
},
{
  category: "Cosmetic Acupuncture",
  question: "Does Cosmetic Acupuncture hurt?",
  answer:
    "Most clients experience little to no discomfort. The needles used are extremely thin, and many people find the treatment relaxing.",
},
{
  category: "Cosmetic Acupuncture",
  question: "How many Cosmetic Acupuncture treatments will I need?",
  answer:
    "Many clients notice improvements after a few sessions. For the best results, we typically recommend a series of 6–12 treatments, followed by occasional maintenance sessions.",
},
{
  category: "Cosmetic Acupuncture",
  question: "Is there any downtime after treatment?",
  answer:
    "There is little to no downtime. You can usually return to your normal daily activities immediately after your appointment. Mild redness may occur but typically disappears within a few hours.",
},
{
  category: "Cosmetic Acupuncture",
  question: "Is Cosmetic Acupuncture safe?",
  answer:
    "Yes. Cosmetic Acupuncture is a safe, natural treatment when performed by a licensed and trained acupuncture practitioner using sterile, single-use needles.",
},
{
  category: "Cosmetic Acupuncture",
  question: "Who is a good candidate for Cosmetic Acupuncture?",
  answer:
    "Cosmetic Acupuncture is suitable for most healthy adults who want a natural approach to improving their skin's appearance without surgery or injections.",
},
{
  category: "Cosmetic Acupuncture",
  question: "Can Cosmetic Acupuncture replace Botox or fillers?",
  answer:
    "Cosmetic Acupuncture is a natural alternative that focuses on improving skin health, muscle tone, and collagen production. While it does not produce the same immediate results as Botox or fillers, many clients choose it for gradual, natural-looking rejuvenation.",
},
{
  category: "Cosmetic Acupuncture",
  question: "What should I do before my appointment?",
  answer:
    "Arrive with clean skin if possible, stay hydrated, and avoid alcohol for 24 hours before your treatment.",
},
{
  category: "Cosmetic Acupuncture",
  question: "What should I do after Cosmetic Acupuncture?",
  answer: "After your treatment:",
  bulletPoints: [
    "Drink plenty of water.",
    "Avoid strenuous exercise for the rest of the day.",
    "Avoid alcohol and excessive sun exposure for 24 hours.",
    "Follow any aftercare instructions provided by your practitioner.",
  ],
},
{
  category: "Cosmetic Acupuncture",
  question: "Can Cosmetic Acupuncture be combined with other treatments?",
  answer:
    "Yes. Cosmetic Acupuncture pairs well with facial cupping, Gua Sha, facial massage, and traditional acupuncture to enhance your overall results.",
},
{
  category: "Cosmetic Acupuncture",
  question: "How long does a Cosmetic Acupuncture session take?",
  answer:
    "A typical Cosmetic Acupuncture appointment lasts 60 to 90 minutes, depending on your personalized treatment plan.",
},
// // Acupuncture FAQs
{
  category: "Acupuncture",
  question: "What is Acupuncture?",
  answer:
    "Acupuncture is a traditional Chinese medicine treatment that involves inserting very fine, sterile needles into specific points on the body. It helps restore balance, relieve pain, improve circulation, and support the body's natural healing process.",
},
{
  category: "Acupuncture",
  question: "What conditions can Acupuncture help with?",
  answer: "Acupuncture may help treat a variety of conditions,",
  bulletPoints: [
    "Back and neck pain",
    "Shoulder and knee pain",
    "Headaches and migraines",
    "Sciatica",
    "Arthritis",
    "Stress and anxiety",
    "Insomnia",
    "Digestive issues",
    "Women's health concerns",
    "Sports injuries",
  ],
},
{
  category: "Acupuncture",
  question: "Does Acupuncture hurt?",
  answer:
    "Most people feel little to no discomfort. The needles are extremely thin, and many clients describe the sensation as a mild tingling, warmth, or dull ache. Most people find treatments relaxing.",
},
{
  category: "Acupuncture",
  question: "Are Acupuncture needles sterile?",
  answer:
    "Yes. We use sterile, single-use disposable needles that meet professional safety standards. A new set of needles is used for every patient.",
},
{
  category: "Acupuncture",
  question: "Is Acupuncture safe?",
  answer:
    "Yes. When performed by a licensed and trained practitioner, acupuncture is considered a safe treatment with very few side effects.",
},
{
  category: "Acupuncture",
  question: "How many Acupuncture treatments will I need?",
  answer:
    "The number of treatments depends on your condition, health history, and goals. Some people notice improvement after one session, while chronic conditions often benefit from a series of treatments.",
},
{
  category: "Acupuncture",
  question: "What should I expect during my first appointment?",
  answer:
    "Your first visit includes a health consultation, discussion of your symptoms, and a personalized treatment plan. Your practitioner will then perform your acupuncture treatment based on your individual needs.",
},
{
  category: "Acupuncture",
  question: "What should I wear to my appointment?",
  answer:
    "Wear loose, comfortable clothing that allows easy access to your arms and legs. If needed, we can also provide a treatment gown.",
},
{
  category: "Acupuncture",
  question: "What should I do after my treatment?",
  answer: "After your appointment:",
  bulletPoints: [
    "Drink plenty of water.",
    "Avoid strenuous exercise for the rest of the day.",
    "Eat a light meal if you're hungry.",
    "Give your body time to rest and respond to the treatment.",
  ],
},
{
  category: "Acupuncture",
  question: "Can Acupuncture be combined with other treatments?",
  answer:
    "Yes. Acupuncture works well alongside massage therapy, cupping therapy, Tuina massage, Gua Sha, physiotherapy, chiropractic care, and other healthcare treatments.",
},
{
  category: "Acupuncture",
  question: "Are there any side effects?",
  answer:
    "Side effects are generally mild and uncommon. Some people experience slight soreness, minor bruising, or temporary fatigue after treatment, which usually resolves quickly.",
},
{
  category: "Acupuncture",
  question: "Is Acupuncture covered by insurance?",
  answer:
    "Many extended health insurance plans cover acupuncture treatments. We recommend checking with your insurance provider to confirm your coverage and benefits.",
},
  // Hijama (Wet Cupping)
  // Facial Cupping
{
  category: "Hijama (Wet Cupping)",
  question: "What is Facial Cupping?",
  answer: "Facial Cupping is a gentle, non-invasive therapy that uses small silicone or glass cups to stimulate circulation, encourage lymphatic drainage, and relax facial muscles. It promotes a brighter, healthier-looking complexion while helping reduce facial tension.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "What are the benefits of Facial Cupping?",
  answer: "Facial Cupping may help:",
   bulletPoints: [
    "Improve blood circulation",
    "Reduce puffiness",
    "Promote lymphatic drainage",
    "Improve skin tone and texture",
    "Relax facial muscles",
    "Support natural collagen production",
    "Create a healthy, radiant glow",
  ],
},
{
  category: "Hijama (Wet Cupping)",
  question: "Does Facial Cupping hurt?",
  answer: "No. Facial Cupping is very gentle and should not be painful. Most people find the treatment relaxing and enjoy the light massage-like sensation.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "Will Facial Cupping leave marks?",
  answer: "Unlike traditional body cupping, Facial Cupping usually does not leave marks. The cups are continuously moved across the skin using facial oil, making the treatment gentle and comfortable.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "How long does a Facial Cupping session take?",
  answer: "A typical Facial Cupping session lasts between 30 and 60 minutes, depending on your treatment plan.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "How many Facial Cupping treatments will I need?",
  answer: "Some clients notice an immediate glow after one session. For longer-lasting results, we typically recommend a series of treatments based on your skin goals.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "Is Facial Cupping safe?",
  answer: "Yes. Facial Cupping is generally safe when performed by a trained practitioner using proper techniques and hygienic equipment.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "Who should avoid Facial Cupping?",
  answer: "Facial Cupping may not be suitable if you have active acne breakouts, open wounds or skin infections, severe rosacea, recent facial surgery, sunburn, or certain medical conditions affecting the skin. Your practitioner will review your health history before treatment.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "What should I do before my Facial Cupping appointment?",
  answer: "Arrive with clean skin if possible and stay well hydrated. Avoid wearing heavy makeup before your appointment.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "What should I do after Facial Cupping?",
  answer: "Drink plenty of water, avoid harsh skincare products for the rest of the day, and allow your skin to recover naturally. Your practitioner will provide personalized aftercare instructions.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "Can Facial Cupping be combined with other treatments?",
  answer: "Yes. Facial Cupping works well alongside facial massage, Gua Sha, acupuncture, and many holistic skincare treatments.",
},
{
  category: "Hijama (Wet Cupping)",
  question: "Is there any downtime after Facial Cupping?",
  answer: "No. Most clients return to their normal activities immediately after treatment with little or no downtime.",
},
  // {
  //   category: "Hijama (Wet Cupping)",
  //   question: "What is Hijama?",
  //   answer: "Hijama, also known as Wet Cupping Therapy, is a traditional therapy that combines suction cups with a controlled, superficial skin technique in which small incisions are made to draw a small, controlled amount of blood.",
  // },
  // {
  //   category: "Hijama (Wet Cupping)",
  //   question: "Is Hijama the same as bloodletting?",
  //   answer: "Hijama is a modern, controlled form of wet cupping and is sometimes referred to as bloodletting cupping. It differs from historical bloodletting practices, as it is performed using a hygienic, closely controlled approach by a trained practitioner.",
  // },
  // {
  //   category: "Hijama (Wet Cupping)",
  //   question: "What is the difference between Wet Cupping and Dry Cupping?",
  //   answer: "Wet Cupping (Hijama) and dry Cupping Therapy both use suction cups. Wet Cupping involves an additional controlled, superficial skin technique, while dry cupping uses suction alone, with no incisions made.",
  // },
  // {
  //   category: "Hijama (Wet Cupping)",
  //   question: "Does Hijama hurt?",
  //   answer: "Most patients experience only minimal discomfort. The technique is performed gently by a trained practitioner in a clean, controlled clinical environment.",
  // },
  // {
  //   category: "Hijama (Wet Cupping)",
  //   question: "What should I wear to my Hijama appointment?",
  //   answer: "We recommend wearing loose, comfortable clothing that allows easy access to the area your practitioner will be treating.",
  // },
  // {
  //   category: "Hijama (Wet Cupping)",
  //   question: "Is Hijama safe?",
  //   answer: "Yes. All Hijama treatments are performed using single-use, sterile equipment, following strict hygiene and safety standards, by a trained practitioner.",
  // },

  // // Osteopathic Therapy
  // {
  //   category: "Osteopathic Therapy",
  //   question: "What is Osteopathic Therapy?",
  //   answer: "Osteopathic Therapy is a hands-on, whole-body approach that uses manual techniques to assess and address restrictions in movement, mobility, and posture.",
  // },
  // {
  //   category: "Osteopathic Therapy",
  //   question: "Do I need a referral for Osteopathic Therapy?",
  //   answer: "No referral is required to book an Osteopathic Therapy appointment at Relief Plus Wellness.",
  // },
  {
    category: "Osteopathic Therapy",
    question: "What should I expect during my first appointment?",
    answer: "Your first visit includes a consultation, health history review, and assessment with your practitioner, who will recommend a personalized treatment plan based on your goals and needs.",
  },

  // Direct Billing & Insurance
  {
    category: "Direct Billing & Insurance",
    question: "Do you offer direct billing?",
    answer: "Yes. Relief Plus Wellness offers direct billing for eligible services with many participating insurance providers, whenever available.",
  },
  {
    category: "Direct Billing & Insurance",
    question: "Is all treatment covered by insurance?",
    answer: "Coverage varies by insurer, plan, and treatment type. We recommend verifying your specific benefits directly with your insurance provider.",
  },
  {
    category: "Direct Billing & Insurance",
    question: "What information should I bring?",
    answer: "Please bring your insurance details (including your policy and group number, if applicable) and a valid ID to your appointment so we can help verify your coverage.",
  },
  {
    category: "Direct Billing & Insurance",
    question: "Do you guarantee insurance coverage?",
    answer: "No. Coverage, reimbursement, and eligibility are determined by your individual insurance provider and policy, and cannot be guaranteed by our clinic.",
  },
  {
    category: "Direct Billing & Insurance",
    question: "Can I still book if I do not have insurance?",
    answer: "Yes. You're welcome to book an appointment even if you don't have insurance. Payment for any services not covered by insurance can be made directly at the clinic.",
  },

  // Clinic
  {
    category: "Clinic",
    question: "Where are you located?",
    answer: "Relief Plus Wellness is located at 1403 Gerrard St E, Toronto, ON M4L 1Z5.",
  },
  {
    category: "Clinic",
    question: "What are your clinic hours?",
    answer: "We are open 7 days a week, from 10:00 AM to 7:00 PM.",
  },
  {
    category: "Clinic",
    question: "Is parking available?",
    answer: "Paid parking is available in the area surrounding our clinic.",
  },
  {
    category: "Clinic",
    question: "Is the clinic accessible by public transit?",
    answer: "Yes. Our clinic is easily accessible by TTC — the Gerrard streetcar (506) stops directly outside our location.",
  },
  // Brazilian Lymphatic Drainage FAQs
{
  category: "Brazilian Lymphatic Drainage",
  question: "What is Brazilian Lymphatic Drainage?",
  answer:
    "Brazilian Lymphatic Drainage is a specialized massage technique that uses rhythmic, firm movements to stimulate the lymphatic system, helping reduce fluid retention, improve circulation, decrease swelling, and enhance body contour.",
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "What are the benefits of Brazilian Lymphatic Drainage?",
  answer: "This treatment may help:",
  bulletPoints: [
    "Reduce water retention and bloating",
    "Improve lymphatic circulation",
    "Decrease swelling",
    "Support detoxification",
    "Enhance body contour",
    "Promote relaxation",
    "Improve overall well-being",
  ],
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "Does Brazilian Lymphatic Drainage hurt?",
  answer:
    "No. The treatment is generally comfortable and relaxing. While the technique uses firm, rhythmic pressure, it should not be painful.",
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "How long does a treatment last?",
  answer:
    "Our Brazilian Lymphatic Drainage sessions are available in 60-minute and 90-minute appointments, depending on your goals and treatment plan.",
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "How many sessions will I need?",
  answer:
    "Some clients notice results after one treatment. However, for optimal and longer-lasting benefits, a series of treatments is often recommended based on your individual needs.",
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "Who can benefit from Brazilian Lymphatic Drainage?",
  answer: "This treatment is ideal for people who:",
  bulletPoints: [
    "Experience swelling or fluid retention",
    "Feel bloated",
    "Want to improve circulation",
    "Are looking to support recovery after cosmetic procedures (with medical clearance)",
    "Want a more sculpted appearance",
  ],
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "Is Brazilian Lymphatic Drainage safe?",
  answer:
    "Yes. It is a safe, non-invasive treatment when performed by a trained practitioner. Before your appointment, we will review your health history to ensure it is appropriate for you.",
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "Who should avoid Brazilian Lymphatic Drainage?",
  answer: "This treatment may not be suitable if you have:",
  bulletPoints: [
    "Active infections",
    "Blood clots (DVT)",
    "Severe heart or kidney disease",
    "Uncontrolled medical conditions",
    "Certain cancers without physician approval",
    "Please inform your practitioner about your medical history before treatment.",
  ],
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "What should I do after my treatment?",
  answer: "For the best results:",
  bulletPoints: [
    "Drink plenty of water.",
    "Stay active with light walking if possible.",
    "Avoid excessive alcohol and salty foods for the rest of the day.",
    "Follow any aftercare instructions provided by your practitioner.",
  ],
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "Can Brazilian Lymphatic Drainage help after surgery?",
  answer:
    "Yes. When approved by your surgeon, Brazilian Lymphatic Drainage may help reduce swelling and support recovery following certain cosmetic procedures. Always follow your surgeon's recommendations regarding when treatment can begin.",
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "How soon will I see results?",
  answer:
    "Many clients notice reduced bloating and a more sculpted appearance immediately after treatment. Results vary depending on your body, hydration, and treatment goals.",
},
{
  category: "Brazilian Lymphatic Drainage",
  question: "Can Brazilian Lymphatic Drainage be combined with other treatments?",
  answer:
    "Yes. It can be combined with massage therapy, cupping, facial lymphatic drainage, and other wellness treatments to support your overall health and recovery.",
},
// Head Massage FAQs
{
  category: "Head Massage",
  question: "What is a Head Massage?",
  answer:
    "A Head Massage is a relaxing therapy that focuses on the scalp, neck, shoulders, and upper back. It uses gentle pressure and massage techniques to relieve tension, improve circulation, and promote relaxation.",
},
{
  category: "Head Massage",
  question: "What are the benefits of a Head Massage?",
  answer: "A Head Massage may help:",
  bulletPoints: [
    "Relieve stress and anxiety",
    "Reduce headaches and migraines",
    "Ease neck and shoulder tension",
    "Improve blood circulation to the scalp",
    "Promote better sleep",
    "Support mental relaxation",
    "Leave you feeling refreshed and energized",
  ],
},
{
  category: "Head Massage",
  question: "Does a Head Massage help with headaches?",
  answer:
    "Yes. Many clients find that Head Massage helps relieve tension headaches and reduces muscle tightness in the neck and shoulders that can contribute to headaches.",
},
{
  category: "Head Massage",
  question: "Will oil be used during the massage?",
  answer:
    "Depending on the treatment you choose, your practitioner may use massage oil or perform a dry head massage. If oil is used, you will be informed before the treatment begins.",
},
{
  category: "Head Massage",
  question: "How long is a Head Massage session?",
  answer:
    "We offer 30-minute, 60-minute, and 90-minute Head Massage sessions, depending on your needs and preferences.",
},
{
  category: "Head Massage",
  question: "What should I wear to my appointment?",
  answer:
    "Wear comfortable clothing. Your practitioner will ensure you are properly draped and comfortable throughout the treatment.",
},
{
  category: "Head Massage",
  question: "Is Head Massage safe?",
  answer:
    "Yes. Head Massage is generally safe for most people when performed by a trained practitioner. Please let us know if you have any medical conditions, recent injuries, or scalp concerns before your treatment.",
},
{
  category: "Head Massage",
  question: "Can Head Massage help reduce stress?",
  answer:
    "Absolutely. Head Massage is one of the most effective treatments for promoting relaxation, calming the nervous system, and reducing everyday stress and mental fatigue.",
},
{
  category: "Head Massage",
  question: "How often should I have a Head Massage?",
  answer:
    "The frequency depends on your needs. Many clients enjoy monthly treatments for relaxation, while those with chronic tension or stress may benefit from weekly or bi-weekly sessions.",
},
{
  category: "Head Massage",
  question: "What should I do after my Head Massage?",
  answer: "After your treatment:",
  bulletPoints: [
    "Drink plenty of water.",
    "Take a few moments to relax before returning to your daily activities.",
    "Avoid strenuous activity if possible.",
    "If massage oil was used, you may wish to leave it on your scalp for a short time before washing your hair.",
  ],
},
{
  category: "Head Massage",
  question: "Can Head Massage improve scalp health?",
  answer:
    "Yes. By stimulating blood circulation to the scalp, Head Massage may help support a healthy scalp and contribute to healthier-looking hair. While it is not a medical treatment for hair loss, many clients enjoy the overall benefits for scalp wellness.",
},
{
  category: "Head Massage",
  question: "Can Head Massage be combined with other treatments?",
  answer:
    "Yes. Head Massage can be combined with full-body massage, acupuncture, aromatherapy, facial massage, or other wellness treatments for a more relaxing and therapeutic experience.",
},
// Hot Stone Massage FAQs
{
  category: "Hot Stone Massage",
  question: "What is Hot Stone Massage?",
  answer:
    "Hot Stone Massage is a relaxing therapy that uses smooth, heated basalt stones placed on specific areas of the body while your therapist performs a therapeutic massage. The warmth helps relax muscles, improve circulation, and enhance the overall massage experience.",
},
{
  category: "Hot Stone Massage",
  question: "What are the benefits of Hot Stone Massage?",
  answer: "Hot Stone Massage may help:",
  bulletPoints: [
    "Relieve muscle tension and stiffness",
    "Improve blood circulation",
    "Reduce stress and anxiety",
    "Promote deep relaxation",
    "Ease chronic muscle discomfort",
    "Improve flexibility and range of motion",
    "Encourage better sleep",
  ],
},
{
  category: "Hot Stone Massage",
  question: "Will the stones be too hot?",
  answer:
    "No. The stones are heated to a safe, comfortable temperature and are always tested before being placed on your body. If they ever feel too warm, simply let your therapist know, and the temperature will be adjusted.",
},
{
  category: "Hot Stone Massage",
  question: "Does Hot Stone Massage hurt?",
  answer:
    "No. Hot Stone Massage is generally very relaxing. Your therapist can adjust the pressure to suit your comfort level, making it suitable for both gentle relaxation and deeper muscle relief.",
},
{
  category: "Hot Stone Massage",
  question: "How long does a Hot Stone Massage session last?",
  answer:
    "We offer 60-minute and 90-minute Hot Stone Massage sessions, allowing enough time to relax the muscles and enjoy the full therapeutic benefits.",
},
{
  category: "Hot Stone Massage",
  question: "Who is Hot Stone Massage recommended for?",
  answer: "Hot Stone Massage is ideal for people who:",
  bulletPoints: [
    "Experience muscle tightness",
    "Have chronic stress or tension",
    "Want deep relaxation",
    "Have poor circulation",
    "Prefer warmth during their massage",
  ],
},
{
  category: "Hot Stone Massage",
  question: "Who should avoid Hot Stone Massage?",
  answer:
    "Hot Stone Massage may not be suitable for individuals with certain medical conditions.",
  bulletPoints: [
    "Recent injuries",
    "Burns",
    "Severe diabetes-related nerve damage",
    "Certain heart conditions",
    "Pregnancy (unless approved by a healthcare provider)",
    "Please inform your therapist of any medical concerns before your appointment.",
  ],
},
{
  category: "Hot Stone Massage",
  question: "What should I wear to my appointment?",
  answer:
    "Wear comfortable clothing. You will be properly draped throughout the treatment, with only the area being worked on exposed to ensure your privacy and comfort.",
},
{
  category: "Hot Stone Massage",
  question: "What should I do after my Hot Stone Massage?",
  answer: "To maximize the benefits:",
  bulletPoints: [
    "Drink plenty of water.",
    "Avoid strenuous exercise for the rest of the day.",
    "Take time to relax.",
    "Stretch gently if needed.",
  ],
},
{
  category: "Hot Stone Massage",
  question: "Can Hot Stone Massage help with stress?",
  answer:
    "Yes. The combination of heat and massage encourages deep relaxation, helping calm the nervous system and reduce physical and mental stress.",
},
{
  category: "Hot Stone Massage",
  question: "Can I combine Hot Stone Massage with other treatments?",
  answer:
    "Yes. Many clients combine Hot Stone Massage with acupuncture, cupping therapy, head massage, or foot massage for a more comprehensive wellness experience.",
},
{
  category: "Hot Stone Massage",
  question: "How often should I have a Hot Stone Massage?",
  answer:
    "For general wellness, many clients schedule a session every 3–4 weeks. If you're managing ongoing muscle tension or stress, your therapist may recommend more frequent treatments.",
},
// Signature Lymphatic Package FAQs
{
  category: "Signature Lymphatic Package",
  question: "What is the Signature Lymphatic Package?",
  answer:
    "Our Signature Lymphatic Package includes three Brazilian Lymphatic Drainage sessions plus a complimentary 30-minute relaxation massage. This package is designed to support healthy circulation, reduce fluid retention, and promote overall wellness.",
},
{
  category: "Signature Lymphatic Package",
  question: "Who is this package recommended for?",
  answer: "This package is ideal for individuals who:",
  bulletPoints: [
    "Experience water retention or bloating",
    "Want to support healthy lymphatic circulation",
    "Are recovering from cosmetic procedures (with medical clearance)",
    "Want ongoing wellness and body maintenance",
    "Prefer a series of treatments for better results",
  ],
},
{
  category: "Signature Lymphatic Package",
  question: "Why does the package include three sessions?",
  answer:
    "Lymphatic drainage often provides the best results when performed consistently. A series of three treatments helps encourage lymph flow, reduce swelling, and achieve longer-lasting benefits.",
},
{
  category: "Signature Lymphatic Package",
  question: "What are the benefits of this package?",
  answer: "The Signature Lymphatic Package may help:",
  bulletPoints: [
    "Reduce fluid retention",
    "Improve circulation",
    "Support the body's natural detoxification process",
    "Decrease swelling",
    "Promote relaxation",
    "Leave you feeling lighter and refreshed",
  ],
},
{
  category: "Signature Lymphatic Package",
  question: "What is included in the complimentary relaxation massage?",
  answer:
    "Your package includes one complimentary 30-minute relaxation massage, designed to help reduce muscle tension, relieve stress, and enhance your overall wellness experience.",
},
{
  category: "Signature Lymphatic Package",
  question: "How far apart should my sessions be?",
  answer:
    "Most clients schedule their treatments 3 to 7 days apart, although your practitioner may recommend a different schedule based on your individual goals.",
},
{
  category: "Signature Lymphatic Package",
  question: "Is this package suitable after cosmetic surgery?",
  answer:
    "Yes, in many cases. Post-operative lymphatic drainage can help reduce swelling and support recovery, but you should always have approval from your surgeon before beginning treatment.",
},
{
  category: "Signature Lymphatic Package",
  question: "Is Brazilian Lymphatic Drainage painful?",
  answer:
    "No. The treatment uses gentle, rhythmic movements that are relaxing and comfortable. It is not intended to be a deep tissue massage.",
},
{
  category: "Signature Lymphatic Package",
  question: "How long is each session?",
  answer:
    "Each Brazilian Lymphatic Drainage session lasts 60 minutes. The package also includes one complimentary 30-minute relaxation massage.",
},
{
  category: "Signature Lymphatic Package",
  question: "How should I prepare for my appointment?",
  answer: "For the best experience:",
  bulletPoints: [
    "Drink plenty of water before your session.",
    "Wear comfortable clothing.",
    "Avoid heavy meals immediately before treatment.",
    "Arrive a few minutes early to relax.",
  ],
},
{
  category: "Signature Lymphatic Package",
  question: "Can I purchase this package as a gift?",
  answer:
    "Yes. The Signature Lymphatic Package makes an excellent gift for anyone interested in wellness, recovery, or self-care.",
},
{
  category: "Signature Lymphatic Package",
  question: "How long is the package valid?",
  answer:
    "Please contact our clinic for current package terms and validity. We recommend completing all sessions within the recommended timeframe to achieve the best results.",
},
// Advanced Lymphatic Package FAQs
{
  category: "Advanced Lymphatic Package",
  question: "What is the Advanced Lymphatic Package?",
  answer:
    "The Advanced Lymphatic Package includes four Brazilian Lymphatic Drainage sessions plus a complimentary 45-minute relaxation massage. It is designed to provide ongoing support for healthy circulation, reduced fluid retention, and long-lasting wellness benefits.",
},
{
  category: "Advanced Lymphatic Package",
  question: "Who is this package best suited for?",
  answer: "This package is ideal for people who:",
  bulletPoints: [
    "Experience persistent water retention",
    "Want regular lymphatic maintenance",
    "Are recovering from cosmetic procedures (with medical approval)",
    "Are committed to improving circulation and reducing swelling",
    "Want a comprehensive wellness program",
  ],
},
{
  category: "Advanced Lymphatic Package",
  question: "Why are four lymphatic drainage sessions included?",
  answer:
    "Lymphatic drainage treatments often produce the best results when performed as a series. Four sessions allow your body to respond consistently, helping maintain healthy lymphatic flow and longer-lasting improvements.",
},
{
  category: "Advanced Lymphatic Package",
  question: "What are the benefits of the Advanced Lymphatic Package?",
  answer: "This package may help:",
  bulletPoints: [
    "Reduce fluid retention and swelling",
    "Support healthy lymphatic circulation",
    "Improve the body's natural detoxification process",
    "Promote tissue healing and recovery",
    "Increase feelings of lightness and relaxation",
    "Enhance overall wellness",
  ],
},
{
  category: "Advanced Lymphatic Package",
  question: "What is included in the complimentary relaxation massage?",
  answer:
    "The package includes one 45-minute relaxation massage to help reduce muscle tension, relieve stress, improve circulation, and complement your lymphatic drainage treatments.",
},
{
  category: "Advanced Lymphatic Package",
  question: "How often should I schedule my sessions?",
  answer:
    "For the best results, most clients schedule their appointments 3 to 7 days apart. Your practitioner may recommend a personalized schedule based on your goals and health needs.",
},
{
  category: "Advanced Lymphatic Package",
  question: "Is this package suitable after cosmetic surgery?",
  answer:
    "Yes. Brazilian Lymphatic Drainage is commonly recommended after cosmetic procedures to help reduce swelling and support recovery. However, you should always receive approval from your surgeon before beginning treatment.",
},
{
  category: "Advanced Lymphatic Package",
  question: "Is Brazilian Lymphatic Drainage painful?",
  answer:
    "No. The treatment uses gentle, rhythmic techniques that are relaxing and comfortable. It is not intended to be a deep tissue massage.",
},
{
  category: "Advanced Lymphatic Package",
  question: "How long is each appointment?",
  answer:
    "Each Brazilian Lymphatic Drainage session lasts 60 minutes, and your complimentary relaxation massage lasts 45 minutes.",
},
{
  category: "Advanced Lymphatic Package",
  question: "How should I prepare for my appointment?",
  answer: "To get the most from your treatment:",
  bulletPoints: [
    "Stay well hydrated.",
    "Wear loose, comfortable clothing.",
    "Avoid heavy meals immediately before your session.",
    "Arrive a few minutes early to relax.",
  ],
},
{
  category: "Advanced Lymphatic Package",
  question: "Can someone purchase this package as a gift?",
  answer:
    "Yes. The Advanced Lymphatic Package is an excellent gift for anyone interested in wellness, recovery, or self-care.",
},
{
  category: "Advanced Lymphatic Package",
  question: "How long is the package valid?",
  answer:
    "Please contact our clinic for current package terms and expiration details. For the best results, we recommend completing your treatments within the suggested timeframe.",
},
// Ultimate Lymphatic Package FAQs
{
  category: "Ultimate Lymphatic Package",
  question: "What is the Ultimate Lymphatic Package?",
  answer:
    "The Ultimate Lymphatic Package includes five Brazilian Lymphatic Drainage sessions plus a complimentary 60-minute relaxation massage. It is designed for clients seeking long-term lymphatic support, improved circulation, and comprehensive wellness.",
},
{
  category: "Ultimate Lymphatic Package",
  question: "Who is the Ultimate Lymphatic Package best for?",
  answer: "This package is ideal for clients who:",
  bulletPoints: [
    "Want ongoing lymphatic maintenance",
    "Experience persistent fluid retention",
    "Are recovering from cosmetic surgery (with medical approval)",
    "Want maximum value and long-term results",
    "Prefer a structured wellness program",
  ],
},
{
  category: "Ultimate Lymphatic Package",
  question: "Why does this package include five sessions?",
  answer:
    "Lymphatic drainage is often most effective when performed consistently. Five sessions help maintain healthy lymphatic flow, reduce swelling over time, and provide longer-lasting wellness benefits.",
},
{
  category: "Ultimate Lymphatic Package",
  question: "What are the benefits of the Ultimate Lymphatic Package?",
  answer: "This package may help:",
  bulletPoints: [
    "Reduce fluid retention and swelling",
    "Support healthy lymphatic circulation",
    "Promote the body's natural detoxification process",
    "Improve tissue health",
    "Enhance recovery after cosmetic procedures",
    "Increase relaxation and overall well-being",
  ],
},
{
  category: "Ultimate Lymphatic Package",
  question: "What is included in the complimentary relaxation massage?",
  answer:
    "The package includes one 60-minute relaxation massage to help relieve muscle tension, reduce stress, improve circulation, and complement your lymphatic drainage treatments.",
},
{
  category: "Ultimate Lymphatic Package",
  question: "How often should I schedule my appointments?",
  answer:
    "Most clients achieve the best results by scheduling treatments every 3 to 7 days. Your practitioner may recommend a personalized treatment schedule based on your goals.",
},
{
  category: "Ultimate Lymphatic Package",
  question: "Is this package suitable after cosmetic surgery?",
  answer:
    "Yes. Brazilian Lymphatic Drainage is commonly recommended to help reduce swelling and support healing after cosmetic procedures. Please ensure you have approval from your surgeon before beginning treatment.",
},
{
  category: "Ultimate Lymphatic Package",
  question: "Is Brazilian Lymphatic Drainage painful?",
  answer:
    "No. The treatment uses gentle, rhythmic techniques that are relaxing and comfortable. It is designed to encourage lymph flow rather than apply deep pressure.",
},
{
  category: "Ultimate Lymphatic Package",
  question: "How long is each appointment?",
  answer:
    "Each Brazilian Lymphatic Drainage session lasts 60 minutes, and your complimentary relaxation massage is 60 minutes.",
},
{
  category: "Ultimate Lymphatic Package",
  question: "How should I prepare for my appointment?",
  answer: "To get the best results:",
  bulletPoints: [
    "Drink plenty of water before your treatment.",
    "Wear comfortable clothing.",
    "Avoid heavy meals immediately before your appointment.",
    "Arrive a few minutes early to relax.",
  ],
},
{
  category: "Ultimate Lymphatic Package",
  question: "Can I purchase the Ultimate Lymphatic Package as a gift?",
  answer:
    "Yes. This package makes an excellent gift for anyone interested in wellness, post-surgical recovery, or long-term self-care.",
},
{
  category: "Ultimate Lymphatic Package",
  question: "How long is the package valid?",
  answer:
    "Please contact our clinic for current package terms and validity. For optimal results, we recommend completing your treatments within the suggested treatment schedule.",
},
];

export const faqCategories = [
  "General",
  "Acupuncture",
  "Hijama (Wet Cupping)",
  "Osteopathic Therapy",
  "Direct Billing & Insurance",
  "Clinic",
] as const;
