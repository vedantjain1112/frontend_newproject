import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Alphabets.scss";

function Alphabets() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  const facts = {
    A: {
      letter: "A",
      heading: "A is for Ahimsa",
      subheading: "Ahimsa means non-violence.",
      text1: `जब कोई स्टॉप लाइट नहीं होती, तो एक पुलिसकर्मी हमें बताता है कि कब रुकना है। वह अपना हाथ पकड़कर ऐसा करता है, यह हमें रुकने के लिए कहता है। ठीक उसी तरह तस्वीर में दिख रहा हाथ हमसे कहता है कि रुकें और सोचें कि हम क्या करने जा रहे हैं, दूसरे लोगों से बात करें या सोचें। इनमें से किसी भी कार्य से हम किसी को ठेस पहुँचा सकते हैं। हमें कुछ भी करने से पहले रुकना और सोचना होगा। इस तरह, हम अहिंसा के सिद्धांतों का बेहतर पालन कर पाएंगे। हम जो काम करते हैं, जो शब्द कहते हैं और जिस तरह से सोचते हैं, उससे हमें अच्छे या बुरे कर्म* मिलते हैं। हाथ में मौजूद पहिया हमें बताता है कि अगर हम इन सब चीजों पर नजर नहीं रखेंगे तो हमारी आत्मा कभी भी जीवन और मृत्यु के इस चक्र से मुक्त नहीं हो पाएगी।`,
      text2: ` इसलिए अहिंसा हमें याद दिलाती है कि कुछ भी करने से पहले रुकें और सोचें, और यह सुनिश्चित करें कि हम जो करते हैं, कहते हैं या सोचते हैं वह हमें परेशानी में न डाले।`,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.6_LSz02VzEZH2ln_gwWj2wHaJ4&pid=Api&P=0&h=180",
    },
    B: {
      letter: "B",
      heading: "B is for Bowing Down",
      subheading: "Bowing Down का अर्थ है सम्मान देना",
      text1: `हम सिद्ध और अरिहंत भगवान को नमस्कार करते हैं। हम आचार्य, उपाध्याय, और सभी भिक्षुओं और भिक्षुणियों*** को भी नमन करते हैं। झुककर हम उनके प्रति अपना सम्मान प्रकट करते हैं और उनकी सफलता की प्रशंसा करते हैं। हम अपने माता-पिता, दादा-दादी और अपने शिक्षकों को भी नमन करते हैं क्योंकि हम उनके प्रति अपना सम्मान दिखाना चाहते हैं। और उन्होंने हमारे लिए जो किया है उसके लिए उन्हें धन्यवाद दें। इस तस्वीर में एक शख्स झुक रहा है. जब हम झुकते हैं तो हमारा अहंकार ख़त्म हो जाता है और हम अधिक विनम्र हो जाते हैं।`,
      text2: `इसलिए याद रखें, दूसरों का सम्मान झुककर करें।`,
      image:
        "https://tse1.explicit.bing.net/th?id=OIP.8LqFiVZFebRW7fdovPyEywHaFg&pid=Api&P=0&h=180",
    },
    C: {
      letter: "C",
      heading: "C is for Charity",
      subheading:
        "Charity का अर्थ है जो आपके पास है उसे दूसरों के साथ साझा करें।",
      text1: `दान वह है जब हम बदले में कुछ भी अपेक्षा किए बिना दूसरों को कुछ देते हैं। जब हमारे पास धन हो तो हमें यह नहीं भूलना चाहिए कि ऐसे बहुत से लोग हैं जो हमारी तरह भाग्यशाली नहीं हैं। इसलिए हमें अपनी संपत्ति का कुछ हिस्सा इन लोगों की मदद के लिए इस्तेमाल करना चाहिए। हम पैसे, कपड़े, शाकाहारी भोजन, किताबें और ऐसी ही चीज़ें दे सकते हैं। हमें अपने धन का उपयोग लोगों को धर्म के बारे में अधिक जानने में मदद करने के लिए भी करना चाहिए। हम जो भी अच्छे काम करते हैं उसके बदले में हमें धन मिलता है। तस्वीर में लड़का साधु* को खाना दे रहा है। भिक्षु और नन सम्मानित व्यक्तित्व हैं। उन्हें दिया जाने वाला भोजन सबसे अच्छे प्रकार के दान में से एक है। हमें खुश होना चाहिए कि हम दूसरों की मदद कर सकते हैं।`,
      text2: `इसलिए, याद रखें कि हमें दान करके अपना धन दूसरों के साथ साझा करना चाहिए।`,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.DdOHNI2EUR_aAlBX8f8azAHaEc&pid=Api&P=0&h=180",
    },

    D: {
      letter: "D",
      heading: "D is for Discipline",
      subheading:
        "Discipline का अर्थ है संगठित कार्यों के लिए व्यवस्थित व्यवहार।",
      text1: `कुछ सिद्धांतों या दिशानिर्देशों के अनुरूप अपना जीवन जीना अनुशासन है। अनुशासन हमारी गतिविधियों में व्यवस्था और संरचना लाता है और हमें अपने लक्ष्यों तक पहुंचने में मदद करता है, जैसे नदी के दो किनारे पानी को मार्गदर्शन और दिशा देकर उसके गंतव्य तक पहुंचने में मदद करते हैं।`,
      text2: `अनुशासन के कुछ उदाहरण हैं

      1. प्रतिदिन एक निश्चित समय पर उठना और एक निश्चित समय पर सोना।
      
      2. प्रतिदिन सुबह, रात और भोजन से पहले प्रार्थना करना।
      
      3. अपने बड़ों के सामने उनकी उम्र, अनुभव और ज्ञान के सम्मान में झुकना।
      
      4. हमेशा मुस्कुराहट और विनम्र शब्दों के साथ दूसरों का अभिवादन करें।
      
      5. हर दिन दयालुता के कार्य में संलग्न रहना, जैसे किसी की मदद करना।`,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.O8pYqa4t6BEdRhMhOoDgLwHaFj&pid=Api&P=0&h=180",
    },

    E: {
      letter: "E",
      heading: "E is for Evening Prayers",
      subheading:
        "Evening Prayer हमें यह सोचने की याद दिलाती है कि हमने आज क्या किया और अगले दिन बेहतर करने का प्रयास करना चाहिए।",
      text1: `प्रार्थना सुबह और शाम को की जा सकती है। तस्वीर में लड़का और लड़की शाम की प्रार्थना कर रहे हैं. जैन धर्म में सबसे महत्वपूर्ण प्रार्थना नवकार मंत्र* है। हमें नवकार मंत्र का उच्चारण सुबह कम से कम पांच बार और शाम को सोने से पहले पांच बार करना चाहिए। एक और प्रार्थना जो हमें जैन होने के नाते अवश्य करनी चाहिए, उसे प्रतिक्रमण कहा जाता है। हम यह प्रार्थना उन सभी बुरे कामों को याद करने के लिए करते हैं जो हमने दिन में किए हैं, उनके लिए माफी मांगते हैं और खुद से अधिक सावधान रहने का वादा करते हैं।`,
      text2: `प्रार्थनाएँ हमारी आत्मा को शुद्ध करती हैं, और हमें इन्हें हमेशा सुबह और शाम को करना चाहिए।`,
      image:
        "https://tse4.explicit.bing.net/th?id=OIP.7PmvhKgXKs-pVG5MOf9HvAHaE2&pid=Api&P=0&h=180",
    },
    F: {
      letter: "F",
      heading: "F is for Forgiveness",
      subheading:
        "क्षमा का अर्थ है किसी ऐसे व्यक्ति को क्षमा करना जिसने आपके साथ कुछ बुरा किया हो।",
      text1: `जैन धर्म में जिस प्रकार अहिंसा मुख्य लक्ष्य है, उसी प्रकार क्षमा मुख्य क्रिया है। हमें ऐसे बहुत से लोग मिलेंगे जिन्होंने हमारे बारे में कुछ बुरा किया है, कहा है या सोचा है। लेकिन इससे कोई फर्क नहीं पड़ता कि उन्होंने हमें कितना दुख पहुँचाया है, हमें उन्हें माफ कर देना चाहिए। हमें हमेशा यह सोचना चाहिए कि हो सकता है कि हमने पहले उनके साथ कुछ बुरा किया हो, और अब वे हम पर पलटवार कर रहे हों। चाहे कुछ भी हो, हमें शांत रहना चाहिए और गुस्सा नहीं करना चाहिए, और हमें बराबरी करने की कोशिश नहीं करनी चाहिए। तस्वीर में, भगवान महावीर** चंडकौशिक नाम के सांप को माफ कर रहे हैं, भले ही उसने महावीर को काट लिया हो। इससे पता चलता है कि अगर महावीर हमें, उनके अनुयायियों को माफ कर सकते हैं, तो उन्हें उन लोगों को भी माफ करना चाहिए जिन्होंने हमें चोट पहुंचाई। क्षमा करने से हमारी आत्मा को मदद मिलती है और क्रोध हमें केवल नीचे खींचेगा।`,
      text2: `जिस तरह अहिंसा हमारे जीवन का हिस्सा है, उसी तरह क्षमा भी हमारे कार्यों का हिस्सा होनी चाहिए।`,
      image:
        "https://3.bp.blogspot.com/-RfjLtckFDzg/TtDZsegnCxI/AAAAAAAAAYc/ZanuxJg91Gc/s1600/Jain+Forgiveness.jpg",
    },
    G: {
      letter: "G",
      heading: "G is for Guru",
      subheading: `Guru का अर्थ है "उपदेशक" या  "मार्गदर्शक"`,
      text1: `जैन धर्म में, एक गुरु एक आध्यात्मिक मार्गदर्शक और संरक्षक के रूप में गहरा महत्व रखता है, जो भक्तों को ज्ञान और मुक्ति के मार्ग पर ले जाता है। गुरु, जिन्हें अक्सर "आचार्य" कहा जाता है, जैन सिद्धांतों, शास्त्रों और प्रथाओं का गहरा ज्ञान रखते हैं। उनकी भूमिका केवल शिक्षण से परे, व्यक्तिगत मार्गदर्शन और जैन जीवन शैली के उदाहरण तक फैली हुई है। प्रवचनों, ध्यान सत्रों और चर्चाओं के माध्यम से, गुरु ज्ञान प्रदान करते हैं, अहिंसा, सत्य, आत्म-अनुशासन और वैराग्य की गहन समझ को बढ़ावा देते हैं। गुरु का मार्गदर्शन व्यक्तियों को आध्यात्मिक विकास के लिए प्रयास करते हुए भौतिक अस्तित्व की जटिलताओं से निपटने में मदद करने में महत्वपूर्ण है। गुरु की शिक्षाओं का पालन करके, साधक कर्म की प्रकृति के बारे में जानकारी प्राप्त करते हैं और सीखते हैं कि इसके प्रभावों से कैसे पार पाया जाए, जिससे अंततः जन्म और मृत्यु के चक्र से मुक्ति का मार्ग प्रशस्त होता है।`,
      text2: `संक्षेप में, जैन धर्म में गुरु आत्मज्ञान के मार्ग को रोशन करते हैं, मुक्ति के शाश्वत लक्ष्य की ओर साधकों को ज्ञान और करुणा के साथ मार्गदर्शन करते हैं।`,
      image:
        "https://1.bp.blogspot.com/_VhWhc2OP2JE/S9MziKODgtI/AAAAAAAAASs/u0rJ5-jCNcU/s1600/Jain.jpg",
    },
    H: {
      letter: "H",
      heading: "H is for Help",
      subheading:
        "Help का अर्थ है किसी के मुसीबत में होने पर उसकी सहायता करना।",
      text1: `हमें ऐसे किसी भी व्यक्ति की सहायता करनी चाहिए जिसे सहायता की आवश्यकता हो। हमें किसी को भी बाहर नहीं छोड़ना चाहिए. हालाँकि जैन धर्म कहता है कि आपको उन लोगों की मदद करनी चाहिए जो अच्छे हैं, लेकिन यह भी कहता है कि, विचारशीलता से, आपको हर किसी की मदद करनी चाहिए। हम सिर्फ लोगों की मदद नहीं करते हैं, बल्कि हमें जानवरों, पक्षियों आदि की भी मदद करनी चाहिए। हम कई अलग-अलग तरीकों से मदद कर सकते हैं जैसे पैसे, कपड़े, भोजन, दवा और किताबें आदि। हम किसी व्यक्ति को महसूस कराकर भी मदद कर सकते हैं। वे दुखी हों तो बेहतर है. यदि कोई मदद के लिए आता है और हमारे पास थोड़ा सा है तो भी हमें उसमें से कुछ देना चाहिए। तस्वीर में लड़के एक अंधे आदमी को सड़क पार करने में मदद कर रहे हैं.`,
      text2: `हमें दूसरों की मदद करने की आदत बनानी चाहिए।`,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.BYG9mSixrvPmP5p2Bs6dtQHaFp&pid=Api&P=0&h=180",
    },
    I: {
      letter: "I",
      heading: "I is for Immortal",
      subheading: "Immortal का अर्थ है शाश्वत।",
      text1: `सभी आत्मायें अमर हैं। लेकिन, जबकि कर्म अभी भी आत्माओं से जुड़े हुए हैं, आत्माएं विभिन्न प्रकार के शरीरों में रहती हैं, जैसे मनुष्य, जानवर, पक्षी, पौधे आदि। शरीर और आत्मा अलग-अलग चीजें हैं। जब सभी संलग्न कर्म नष्ट हो जाते हैं तो आत्मा स्थायी रूप से शरीर से मुक्त हो जाती है और ब्रह्मांड के शीर्ष पर पहुंच जाती है, जिसे सिद्ध शिला कहा जाता है और हमेशा के लिए वहीं रहती है। ये आत्माएं सिद्ध कहलाती हैं। वह शरीर के बंधन से मुक्त होकर हमारी अमर आत्मा होने की स्थिति है।`,
      text2: `इस प्रकार, आत्माएं अनन्त हैं और संलग्न कर्मों के नाश से मुक्त होकर वे अपने अमर स्वरूप को प्राप्त करती हैं, जो शरीर के बंधनों से मुक्ति की प्रतीक्षा में रहता है।`,
      image:
        "https://tse1.explicit.bing.net/th?id=OIP.pdTfVqrm_Ch1Jh0hwbElrQAAAA&pid=Api&P=0&h=180",
    },
    J: {
      letter: "J",
      heading: "J is for Jai-Jinendra",
      subheading: `Jai-Jinendra का अर्थ है "जिनों की स्तुति।"`,
      text1: `ठीक वैसे ही जैसे हम कहते हैं, "हाय!!" या, "हैलो!!" या, "नमस्ते", जब हम दूसरों से मिलते हैं, तो हमें "जय-जिनेंद्र" कहकर भी उनका स्वागत करना चाहिए। इससे हमें कई तरह से मदद मिलती है. हम पुण्यात्माओं का सम्मान कर रहे हैं**। यह दूसरों को भी बताता है कि आप जैन हैं।

      हर सुबह और बिस्तर पर जाने से पहले, आपको अपने माता-पिता, बहनों, भाइयों और दादा-दादी का सम्मान करते हुए, "जय-जिनेंद्र" कहना चाहिए। आपको अपने अतिथियों का सम्मान करते हुए, "जय-जिनेन्द्र" कहना चाहिए। आपको अपने शिक्षकों, जैन पाठशाला के अन्य छात्रों, और अन्य जैनियों, जिन्हें आप जैन केंद्र या किसी अन्य स्थान पर देखते हैं, को भी "जय-जिनेंद्र" कहना चाहिए। जब आप टेलीफोन पर बात करें तो अपने मित्रों का अभिवादन "जय जिनेन्द्र" कहकर करें। चित्र में बालक अपने माता-पिता को "जय जिनेन्द्र" कह रहा है।`,
      text2: `याद रखें दूसरों का अभिवादन सदैव "जय-जिनेन्द्र" कहकर करें।`,
      image:
        "https://tse3.explicit.bing.net/th?id=OIP.6HecU8CIYCqW_nd48_q6lQHaHR&pid=Api&P=0&h=180",
    },

    K: {
      letter: "K",
      heading: "K is for Karma",
      subheading: "Karma - हम जो करते हैं उसका अंतिम परिणाम कर्म है।",
      text1: `हर पल, हम शारीरिक, मौखिक या मानसिक रूप से कुछ न कुछ कर रहे हैं। हमें याद रखना चाहिए कि जब हम काम करते हैं, तो हमें हमेशा कर्म मिलते हैं। कर्म दो प्रकार के होते हैं: अच्छे और बुरे। जब हम अच्छे काम करते हैं, जैसे मदद करना या साझा करना, तो हमें अच्छे कर्म मिलते हैं। लेकिन जब हम कुछ बुरा करते हैं, जैसे गुस्सा करना, चिल्लाना या धोखा देना, तो हमें बुरे कर्म मिलते हैं।

      दोनों कर्मों का फल मिलता है। बुरे कर्म होंगे तो भोगना ही पड़ेगा। आपका जीवन दुखद और बहुत कठिन हो सकता है। लेकिन अगर आपको अच्छे कर्म मिलेंगे तो आपका जीवन आरामदायक और खुशहाल होगा। ऊपर की तस्वीर में, आदमी एक पक्षी को मार रहा है और उसे बुरे कर्म मिल रहे हैं। नीचे की तस्वीर में लड़की जरूरतमंद लोगों को कपड़े दान कर रही है और अच्छे कर्म प्राप्त कर रही है।`,
      text2: `अच्छे कार्य अवश्य करें जिससे आपकी आत्मा को मदद मिलेगी। आप क्या करते हैं और कैसे करते हैं, इससे सावधान रहें, क्योंकि आप हमेशा कर्म इकट्ठा कर रहे हैं।`,
      image:
        "https://tse2.explicit.bing.net/th?id=OIP.QP-rs49lnGkVzyV7sAZ_9QAAAA&pid=Api&P=0&h=180",
    },
    L: {
      letter: "L",
      heading: "L is for Liberation",
      subheading: "Liberation का अर्थ है मोक्ष",
      text1: `प्राचीन जैन धर्म में 'मोक्ष' एक उच्च आदर्श है, जो सांसारिक बंधनों से मुक्ति प्राप्त करने की अंतिम प्राप्ति का प्रतीक है। मोक्ष की प्राप्ति के लिए आत्मा को सभी प्रकार के कर्मों से मुक्त करना अत्यंत महत्वपूर्ण है। जैन धर्म में नैतिकता, अहिंसा और साम्य भावना की मान्यता होने के कारण, मोक्ष की प्राप्ति का मार्ग केवल तप, साधना, और आत्म-निग्रह के माध्यम से होता है। मोक्ष का सिद्धांत जैन धर्म में जीव और आत्मा की महत्वपूर्ण विशेषताओं पर आधारित है, जो संयम, सत्य, और अचेतनता के माध्यम से आत्मा को उच्चतम आदर्श तक पहुंचाता है।`,
      text2: `समर्पण और आत्म-निष्ठा के माध्यम से मोक्ष की प्राप्ति जैन धर्म के सिद्धांतों में समाहित है। मोक्ष का मतलब अंतत: सांसारिक दुःखों से मुक्ति पाना और अद्वितीय आनंद की प्राप्ति करना है। इस प्रकार, मोक्ष न केवल व्यक्ति की स्वतंत्रता का प्रतीक है, बल्कि उसके आत्मा को परमात्मा के साथ एकीकृत करने का राह भी।`,
      image:
        "https://image.slidesharecdn.com/jainismmini-presentationup-120517124920-phpapp02/95/jainism-presentation-25-728.jpg?cb=1337259087",
    },
    M: {
      letter: "M",
      heading: "M is for Mahavira",
      subheading: "Mahavira हमारे अंतिम और 24वें तीर्थंकर थे।",
      text1: `भगवान महावीर का जन्म 559 ईसा पूर्व में हुआ था। क्षत्रियकुंज में. उनके पिता राजा सिद्धार्थ थे और उनकी माता रानी त्रिशला** थीं। जल्द ही राजा सिद्धार्थ के राज्य के लोगों ने यह देखना शुरू कर दिया कि व्यापार और खेती बेहतर होने लगी थी। उन्होंने राजा और रानी को बताया। राजा ने सोचा कि इसका कारण रानी को होने वाला बच्चा है। जब बच्चा पैदा हुआ, तो उन्होंने उसका नाम "वर्धमान" रखा, जिसका अर्थ है हमेशा बढ़ने वाला।`,
      text2: `जैसे-जैसे वह बड़ा हुआ, राजकुमार वर्धमान ने अपने दोस्तों के साथ खेलते हुए बहादुरी दिखाई। एक बार जहां वे खेल रहे थे वहां एक सांप आ गया, राजकुमार वर्धमान को छोड़कर सभी डर गए, जो अभी भी शांत थे। उसने धीरे से सांप को पकड़ा और दूर ले गया। दूसरी बार, वे लुका-छिपी खेल रहे थे। जो भी पकड़ा जाएगा उसे विजेता को गुल्लक की सवारी देनी होगी। एक अजीब लड़का वहां आया और पूछा कि क्या वह उनके साथ खेल सकता है। जल्द ही, राजकुमार वर्धमान ने उसे पकड़ लिया, और लड़के ने राजकुमार को गुल्लक की सवारी दी। अचानक बच्चा लंबा और लंबा होने लगा और वह डरावना दिखने लगा। बाकी बच्चे डरकर भाग गये। उनमें से कुछ पेड़ पर चढ़ गये और कुछ अपने माता-पिता को बताने के लिए दौड़े। जब यह सब चल रहा था, राजकुमार वर्धमान सवारी का आनंद ले रहे थे। जब उसे पता चला कि वह बच्चा अब बच्चा नहीं बल्कि एक बड़ा राक्षस है तो राजकुमार ने राक्षस के सिर पर मुक्का मारा। राक्षस दर्द सहन नहीं कर सका और उसने हार मान ली। उसने राजकुमार से माफ़ी मांगी*** और राजकुमार ने उसे माफ़ कर दिया। राक्षस ने राजकुमार वर्धमान का नाम "महावीर, जिसका अर्थ है मजबूत" रखा।`,
      image:
        "https://www.indianetzone.com/photos_gallery/56/Lord_Mahavira_.jpg",
    },
    N: {
      letter: "N",
      heading: "N is for Namokar Maha Mantra",
      subheading: `Namokar Maha Mantra जैन धर्म में महत्वपूर्ण मंत्र है जिसे प्रत्येक जैन उपासक रोज़ाना जपते हैं। यह मंत्र नमस्कार और प्रार्थना का अर्थ रखता है और इसका मूल उद्देश्य आर्यत्रय और सिद्ध चरणों की महत्वपूर्णता का प्रकटन करना है।

      नमोकार मंत्र का वर्णन निम्नलिखित है:
      
      नमो आरिहंताणं – मैं आरिहंतों को प्रणाम करता हूँ
      नमो सिद्धाणं – मैं सिद्धों को प्रणाम करता हूँ
      नमो आयरियाणं – मैं आचार्यों को प्रणाम करता हूँ
      नमो उवज्झायाणं – मैं उवज्झयान को प्रणाम करता हूँ
      नमो लोए सव्वसाहूणं – मैं सभी साधुओं को प्रणाम करता हूँ
      एसो पंच नमोक्कारो – ये पांच नमस्कार हैं`,
      text1: `जब हम नवकार मंत्र का उच्चारण करते हैं, तो हम अरिहंत भगवान, सिद्ध भगवान, आचार्य, उपाध्याय, भिक्षु और भिक्षुणियों* के प्रति अपना सम्मान व्यक्त करते हैं। अरिहंत भगवान अपने अंतिम जीवन में हैं और उन्होंने आत्मा की स्थिति को प्रभावित करने वाले चार घटी (भारी) कर्मों को नष्ट कर दिया है। उनके पास अनंत ज्ञान है और उन्हें किसी भी चीज़ से कोई लगाव नहीं है। उन्हें किसी चीज़ से नफरत भी नहीं है. मरने से पहले वे अन्य चार कर्मों से, जिन्हें अघाती (हल्के) कर्म कहा जाता है, छुटकारा मिल जाएगा। तब वे सिद्ध भगवान बन जायेंगे। वे नवकार मंत्र में प्रथम हैं, भले ही उनकी आत्माएँ स्वतंत्र नहीं हैं क्योंकि वे हमें मुक्ति का मार्ग दिखाते हैं। चूँकि वे हमारे शिक्षक हैं इसलिए हम सबसे पहले उनका सम्मान करते हैं। जिन आत्माओं पर कोई कर्म नहीं होता और जिन्हें अब जन्म और मृत्यु के चक्र से नहीं गुजरना पड़ता, उन्हें सिद्ध भगवान कहा जाता है। आगे हम आचार्यों को सम्मान देते हैं। वे सभी भिक्षुओं के मुखिया हैं और बहुत शुद्ध और उत्तम जीवन जीते हैं। फिर हम उपाध्यायों को सम्मान देते हैं। उन्होंने पवित्र ग्रंथ सीखे हैं और अब उन्हें भिक्षुओं और भिक्षुणियों को पढ़ा रहे हैं। अंत में हम उन सभी भिक्षुओं और ननों का सम्मान करते हैं जिन्होंने सख्त आचार संहिता के तहत रहना स्वीकार किया है।`,
      text2: `हमें इन महान आत्माओं को श्रद्धांजलि देने के लिए हमेशा नवकार मंत्र का जाप करना चाहिए। इससे शुद्ध विचार उत्पन्न होते हैं जो बदले में शुद्ध गतिविधियों की ओर ले जाते हैं। इसका पाठ सुबह उठते ही, रात को या किसी भी समय करना चाहिए।`,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.Ibfo4utd7CNil3_yKrxlGgHaHZ&pid=Api&P=0&h=180",
    },
    O: {
      letter: "O",
      heading: "O is for Omnipotence",
      subheading:
        "Omnipotence का अर्थ है अखंड शक्तिमत्ता या सर्वशक्तिमान होना। ",
      text1: `सर्वशक्तिमान, एक अवधारणा जो अक्सर दैवीय शक्ति से जुड़ी होती है, असीमित और सर्वव्यापी अधिकार के कब्जे का प्रतीक है। धार्मिक और दार्शनिक संदर्भों में, सर्वशक्तिमानता आम तौर पर किसी बाहरी कारक या बाधाओं से सीमित हुए बिना, कुछ भी और सब कुछ करने की देवता की क्षमता को संदर्भित करती है। यह विशेषता अक्सर विभिन्न धार्मिक प्रणालियों में देवताओं को दी जाती है, जो ब्रह्मांड पर उनकी सर्वोच्चता और नियंत्रण को उजागर करती है। ईसाई धर्म, इस्लाम और यहूदी धर्म जैसे एकेश्वरवादी धर्मों के क्षेत्र में, एक सर्वशक्तिमान ईश्वर की धारणा इस विश्वास को रेखांकित करती है कि देवता के पास अपनी इच्छा के अनुसार दुनिया को बनाने, आकार देने और प्रभावित करने की असीमित शक्ति है। हालाँकि, सर्वशक्तिमानता के बारे में चर्चा ने तार्किक विरोधाभासों की प्रकृति के बारे में भी सवाल उठाए हैं - क्या एक सर्वशक्तिमान प्राणी इतना भारी पत्थर बना सकता है कि वे भी उसे उठा न सकें? इस तरह की पूछताछ सर्वशक्तिमानता की जटिलताओं और पूर्ण शक्ति के दार्शनिक निहितार्थों की पड़ताल करती है।`,
      text2: `दार्शनिक प्रवचन में, सर्वशक्तिमानता की अवधारणा चिंतन का विषय बनी हुई है, जिसमें तार्किक तर्क की सीमाओं में धार्मिक विचार और पूछताछ दोनों शामिल हैं। हालाँकि इसकी सटीक प्रकृति और निहितार्थ विभिन्न धार्मिक और दार्शनिक परंपराओं में भिन्न हो सकते हैं, सर्वशक्तिमानता का विचार परम शक्ति की प्रकृति और दुनिया और इसके निवासियों के साथ इसके संबंधों के बारे में गहन चर्चा जारी रखता है।`,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.juCvEk3igo8L6FGlrarmhgHaKU&pid=Api&P=0&h=180",
    },
    P: {
      letter: "P",
      heading: "P is for Paryushana",
      subheading:
        "Paryushana का अर्थ है आत्म-चिंतन, उपवास और क्षमा मांगने का एक वार्षिक जैन त्योहार है। यह गहन आध्यात्मिक अभ्यास और आत्मनिरीक्षण का समय है।",
      text1: `पर्युषण एक महत्वपूर्ण जैन त्योहार है जो जैन संप्रदाय और इस्तेमाल किए गए कैलेंडर के आधार पर आठ या दस दिनों तक चलता है। यह अवधि गहन आध्यात्मिक चिंतन, उपवास, आत्म-अनुशासन और उच्च धार्मिक अनुष्ठानों द्वारा चिह्नित है। पर्युषण के दौरान, जैन आत्मनिरीक्षण, क्षमा और दान के कार्यों जैसे अभ्यासों के माध्यम से आत्म-शुद्धि में संलग्न होते हैं। यह त्योहार विशेष रूप से जैन धर्म के मूल सिद्धांतों में से एक अहिंसा की शिक्षा से जुड़ा है, और भक्त विचार, भाषण और कार्रवाई में अहिंसा के प्रति अपनी प्रतिबद्धता को गहरा करने का प्रयास करते हैं। पर्युषण में पवित्र ग्रंथों का पाठ करना, प्रार्थना और ध्यान सत्रों में भाग लेना और पूरे वर्ष किए गए किसी भी गलत काम के लिए दूसरों से क्षमा मांगना भी शामिल है। इसके अतिरिक्त, यह त्यौहार "संवत्सरी प्रतिक्रमण" की परंपरा के साथ समाप्त होता है, जो आत्मा-खोज और प्रायश्चित का एक विशेष अनुष्ठान है।`,
      text2: `पर्युषण आत्म-नियंत्रण, सहानुभूति और आध्यात्मिक विकास के जैन मूल्यों के लिए एक गहरा प्रमाण है। अपनी प्रथाओं के माध्यम से, जैन नैतिक जीवन के प्रति अपनी प्रतिबद्धता को फिर से जीवंत करते हैं और अपने भीतर और सभी जीवित प्राणियों के प्रति सद्भाव और करुणा की गहरी भावना पैदा करते हैं।`,
      image:
        "https://qph.fs.quoracdn.net/main-qimg-2c2be71094f414b5346338e3c25644cd",
    },
    Q: {
      letter: "Q",
      heading: "Q is for Queen Trishala",
      subheading: "Queen Trishala ने चौदह स्वप्न देखे",
      text1: `जब रानी त्रिशला गर्भवती थी तब उसने चौदह स्वप्न देखे थे। (कुछ ग्रंथों में उल्लेख है कि रानी त्रिशला ने सोलह सपने देखे थे।) सभी सपने उसके बच्चे के अच्छे गुणों का प्रतीक थे। ऐसे अद्भुत बालक को पाकर रानी त्रिशला बहुत प्रसन्न हुई। वह बालक भगवान महावीर* थे। उन्होंने हमें जन्म और मृत्यु के चक्र से मुक्ति का मार्ग दिखाया।`,
      text2: `
      चौदह स्वप्न थे:
      
      एक सिंह,
      एक हाथी,
      एक बैल,
      देवी लक्ष्मी,
      मालाओं का एक जोड़ा,
      चांद,
      योग,
      एक ध्वज,
      एक चाँदी का जग,
      कमलों वाली एक झील,
      दूधिया सागर,
      एक दिव्य हवाई कार,
      गहनों का ढेर और
      एक धुआं रहित आग.
      
      (15वें मछली का एक जोड़ा और 16वें पर एक ऊंचा सिंहासन।)
      
      रानी त्रिशला बहुत अच्छी महिला थीं.`,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.M2_gHrx0uQhdjOyef-mSfAHaFW&pid=Api&P=0&h=180",
    },
    R: {
      letter: "R",
      heading: "R is for Rosary",
      subheading: "Rosary (माला) का उपयोग ध्यान के लिए किया जाता है।",
      text1: `आमतौर पर हम नवकार मंत्र** का उच्चारण सुबह और शाम को करते हैं। कुछ लोग इसे तीन से पाँच बार कहते हैं, और कुछ लोग इसे एक सौ आठ बार कहते हैं। एक सौ आठ बार गिनना और एक ही समय में ध्यान करना कठिन होगा। यह तब होता है जब हम माला का उपयोग करते हैं। माला में एक सौ आठ मोती अरिहंत (12), सिद्ध (8), आचार्य (36), उपाध्याय (25), और भिक्षु और भिक्षुणियों (27) के कुल एक सौ आठ गुणों का प्रतिनिधित्व करते हैं। तो एक तरह से हम खुद को याद दिला रहे हैं कि ये एक सौ आठ गुण हमें खुद कब मिलेंगे।`,
      text2: `नवकार मंत्र का उच्चारण करने के लिए हमें प्रतिदिन एक ही शांत स्थान पर बैठना चाहिए। हमें बाकी सब कुछ भूलकर नवकार मंत्र में मौजूद 5 महान आत्माओं पर ध्यान केंद्रित करना चाहिए। यह हमारे कर्मों को नष्ट कर सकता है और हमारे मन में अच्छे विचार ला सकता है।

      यह एक माला गाकर किया जा सकता है।`,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.ZLyDPJN13szJyTq4t__DwwAAAA&pid=Api&P=0&h=180",
    },
    S: {
      letter: "S",
      heading: "S is for Sadhu/Sadhvi",
      subheading: "Sadhu/Sadhvi धार्मिक व्यक्ति होते हैं।",
      text1: `साधु हमारे जैसे ही व्यक्ति हैं, लेकिन उन्होंने स्वेच्छा से सांसारिक जीवन छोड़ दिया है और अपनी आत्मा को कर्मों से शुद्ध करने और बदले में आत्मा के उत्थान के लिए पांच महान व्रतों को आचार संहिता के रूप में स्वीकार किया है। साधु उपाश्रय में रहते हैं। वे अपने लिए खाना नहीं बनाते और अपने लिए बनाया गया खाना भी नहीं खाते। वे विभिन्न घरों से स्वीकृत भोजन ही ग्रहण करते हैं। वे अपने माता-पिता और रिश्तेदारों के प्रति मोह छोड़ देते हैं। साधु कुछ कपड़े, भोजन इकट्ठा करने के लिए कुछ कटोरे, रजोहन (साफ करने के लिए मुलायम सूती या ऊनी झाड़ू), मुहपति (सुंदर जीवों की रक्षा के लिए मुंह ढंकना) रखते हैं। कुछ साधु कोई वस्त्र नहीं पहनते हैं और वे मोरपिच्छी (मोर के पंखों को तोड़कर बनाई गई झाड़ू) और कमंडल (पैर धोने के लिए पानी का बर्तन) रखते हैं। वे पैसे, गहने या कुछ भी अपने पास नहीं रखते, जैसे घर या कार. ये अपनी जरूरत से ज्यादा कुछ भी नहीं रखते। वे नंगे पैर चलते हैं ताकि वे कीड़े या कीड़ों को कुचल न दें। साधु महिलाओं या लड़कियों को छूते या बैठते नहीं हैं। वे बरसात के मौसम को छोड़कर, एक समय में कुछ दिनों से अधिक एक स्थान पर नहीं रहते हैं। श्वेतांबर साधु सफेद वस्त्र पहनते हैं जबकि दिगंबर साधु कोई वस्त्र नहीं पहनते हैं।`,
      text2: `वे संपूर्ण अहिंसा, अपरिग्रह का पालन करते हैं। वे सत्य बोलते हैं, ब्रह्मचर्य का पालन करते हैं और संपत्ति में विश्वास नहीं करते। वे अपनी आत्मा को जन्म और मृत्यु के चक्र से मुक्त करने के लिए सख्त आचार संहिता का पालन करते हैं, धर्मग्रंथों का अध्ययन करते हैं, ध्यान करते हैं और तपस्या करते हैं। वे अपने कर्मों से छुटकारा पाने के लिए कठिनाई से गुजरते हैं। वे लोगों को हमारे धर्म के बारे में सिखाते हैं। उपाध्याय साधु साधुओं और साध्वियों (एक महिला धार्मिक नेता) को शास्त्रों के बारे में पढ़ाते हैं। आचार्य सभी साधुओं और साध्वियों के प्रमुख होते हैं और जैन संघ की देखभाल करते हैं, जो साधुओं, साध्वियों, श्रावकों** और श्राविकाओं*** से बना होता है।

      हमें साधुओं और साध्वियों का उनके अनुशासन और जो कुछ वे हमें सिखाते हैं, उसके लिए हमेशा सम्मान करना चाहिए।`,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.7e2uGGwoRpiepJBbSrCiLAAAAA&pid=Api&P=0&h=180",
    },
    T: {
      letter: "T",
      heading: "T is for Tirthankara",
      subheading:
        "Tirthankara का अर्थ है आध्यात्मिक शिक्षक जिन्होंने मुक्ति प्राप्त की है और दूसरों को आत्मज्ञान के मार्ग पर मार्गदर्शन करते हैं। जैन धर्म 24 तीर्थंकरों को मान्यता देता है, जिनमें महावीर अंतिम हैं।",
      text1: `तीर्थंकर एक श्रद्धेय आध्यात्मिक शिक्षक हैं जिन्होंने जन्म और मृत्यु (संसार) के चक्र से ज्ञान और मुक्ति प्राप्त की है। तीर्थंकरों को मार्गदर्शक माना जाता है जो दूसरों के अनुसरण के लिए धर्म का मार्ग स्थापित करते हैं। जैन परंपरा 24 तीर्थंकरों को मान्यता देती है, जिनमें पहले ऋषभनाथ और अंतिम महावीर हैं। तीर्थंकरों को देवताओं के रूप में नहीं बल्कि उन मनुष्यों के रूप में पूजा जाता है जिन्होंने आत्म-बोध, अहिंसा और नैतिक जीवन की निरंतर खोज के माध्यम से चेतना की उच्चतम अवस्था हासिल की है। वे अपनी शिक्षाओं, करुणा और अपने स्वयं के जीवन के उदाहरण के माध्यम से अनुयायियों को प्रेरित करते हैं, प्रत्येक व्यक्ति के लिए आध्यात्मिक मुक्ति प्राप्त करने की क्षमता का प्रदर्शन करते हैं।`,
      text2: `तीर्थंकरों की अवधारणा जैन सिद्धांत का प्रतीक है कि मुक्ति उस व्यक्ति द्वारा प्राप्त की जा सकती है जो सही आचरण और आत्म-खोज के मार्ग का अनुसरण करता है। उनका जीवन आत्मज्ञान के प्रकाशस्तंभ के रूप में कार्य करता है, भक्तों को आंतरिक शुद्धता की स्थिति और अंततः जन्म और मृत्यु के चक्र से मुक्ति की ओर मार्गदर्शन करता है।`,
      image:
        "https://i.pinimg.com/originals/19/4d/40/194d408799bc99ce92f66139452973fd.jpg",
    },
    U: {
      letter: "U",
      heading: "U is for Upashraya",
      subheading: "Upashraya वह स्थान है जहाँ साधु या साध्वियाँ रहते हैं।",
      text1: `उपाश्रय एक बहुत ही साधारण स्थान होता है जिसमें एक बड़ा हॉल और कुछ कमरे होते हैं। इसमें एयर कंडीशनर या कोई पंखा नहीं है लेकिन कई खिड़कियाँ हैं। एक उपाश्रय में साधुओं या साध्वियों के बैठने और सोने के लिए कुछ लकड़ी के बिस्तरों के अलावा कोई फर्नीचर नहीं होता है। जिस स्थान पर साधु-साध्वी निवास करते हैं उसे उपाश्रय कहा जाता है। आमतौर पर साधु या साध्वियां बरसात के मौसम को छोड़कर एक स्थान पर कुछ दिनों से ज्यादा नहीं रुकते हैं। साधु-साध्वी एक ही समय में एक ही उपाश्रय में एक साथ नहीं रहते। हालाँकि एक ही उपाश्रय का उपयोग साधु या साध्वियाँ अलग-अलग समय पर कर सकते हैं।`,
      text2: `उपाश्रय का उपयोग गृहस्थों द्वारा सामायिक और अन्य धार्मिक गतिविधियों का अध्ययन करने या प्रदर्शन करने के लिए भी किया जाता है।
      साधु और साध्वियाँ उपाश्रय में अपने धार्मिक व्याख्यान देते हैं।`,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.7r1zGjQ8sDOrRHhT9b9CrgHaEK&pid=Api&P=0&h=180",
    },
    V: {
      letter: "V",
      heading: "V is for Vow",
      subheading: "Vow का मतलब होता है वादा.",
      text1: `प्रतिज्ञा एक सच्चा वादा या प्रतिज्ञा है जो किसी को एक निर्दिष्ट कार्य या व्यवहार के तरीके से बांधती है। प्रतिज्ञा लेने का अर्थ है कि आप स्वयं से कुछ कार्यों को कुछ निश्चित तरीकों से करने का वादा करते हैं। प्रतिज्ञाएँ हमें स्वयं को अनुशासित करने में मदद करती हैं। बुरे कर्मों को कम करने और अच्छे कर्मों को संचित करने में मदद के लिए व्रत बहुत महत्वपूर्ण हैं। व्रत कई प्रकार के होते हैं जैसे चौविहार (सूर्यास्त से सूर्योदय तक या निश्चित समय तक कुछ भी खाना या पीना नहीं), एकताना (दिन में एक समय एक ही स्थान पर बैठकर भोजन करना), उपवास (छत्तीस घंटे तक कुछ नहीं खाना)। एक दिन पहले सूर्यास्त से शुरू करके अगले दिन सूर्योदय तक), सामायिक (सांसारिक विचारों या चीजों से प्रभावित हुए बिना एक ही स्थान पर चालीस मिनट तक शांति से बैठना)। अलग-अलग व्रत अलग-अलग समय के लिए हो सकते हैं। साधु और साध्वियाँ पाँच महान प्रतिज्ञाएँ लेते हैं, 1) हिंसा नहीं करना (हिंसा), 2) झूठ बोलना, 3) चोरी करना, 4) अपवित्र होना, और 5) अधिकार जमाना नहीं। आप जीवन भर ये शपथ लेते हैं।`,
      text2: `जो प्रतिज्ञाएँ तुम लेते हो उनका बहुत ध्यानपूर्वक पालन करना चाहिए।`,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.zSP9R_hRWJ6k_spiveYCbwHaEK&pid=Api&P=0&h=180",
    },
    W: {
      letter: "W",
      heading: "W is for Worship",
      subheading: "Worship का अर्थ है प्रार्थना करना। ",
      text1: `किसी मूर्ति, प्रतिमा, देवता या पवित्र वस्तु के प्रति किया गया श्रद्धापूर्ण प्रेम पूजा कहलाता है। यह प्रेम समारोहों या प्रार्थनाओं के एक समूह द्वारा व्यक्त किया जाता है। जैन अरिहंत (जिन) और सिद्ध भगवान* के प्रति अपनी प्रबल भक्ति दिखाते हैं, जिन्होंने खुद को जन्म और मृत्यु के चक्र से मुक्त कर लिया है। हम खुद को यह याद दिलाने के लिए उनकी पूजा करते हैं कि वे मुक्त आत्माएं हैं और अब हमारे आदर्श बन गए हैं और हम उनके जैसा बनना चाहते हैं। पूजा हमारी आत्मा को ऊपर उठाने में मदद करती है और यह एहसास कराती है कि अगर अहिंसा, सत्य, चोरी न करना, ब्रह्मचर्य और अपरिग्रह के अभ्यास के माध्यम से हम राग और द्वेष से मुक्त हो सकते हैं, तो हम भी मुक्त हो सकते हैं।

      पूजा प्रार्थना, ध्यान, उपवास आदि द्वारा की जाती है। पूजा मंदिर, उपाश्रय, जैन केंद्रों या घर पर भी की जा सकती है।`,
      text2: `हमें दिखावे के लिए नहीं बल्कि पूरे दिल और दिमाग से पूजा करनी चाहिए।`,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.EkrommvDlkSCzfebDVJhlAAAAA&pid=Api&P=0&h=180",
    },
    X: {
      letter: "X",
      heading: "X is for Xylography",
      subheading: "Xylography का अर्थ है लकड़ी पर नक्काशी करने की कला |",
      text1: `ज़ाइलोग्राफी लकड़ी पर नक्काशी करने की एक कला है। यह कला भारत के गुजरात और कर्नाटक राज्य की विशेषता रही है। यहां जिन मूर्तियों, देवताओं, शुभ प्रतीकों और जैन घरों की खिड़की के फ्रेम, गुंबदों और मेहराबों की लकड़ी की नक्काशी है। यहां चौदहवीं शताब्दी के बाद से उत्कृष्ट लकड़ी की नक्काशी वाले कुछ मंदिर हैं। चित्र में गोलाकार नक्काशी अनंत दुनिया का दमन करती है। जिन्ना हमें जन्म और मृत्यु के इस चक्र से आगे बढ़ने और इस प्रकार दुखों से मुक्त होने की याद दिलाती है।`,
      text2: `जाइलोग्राफी कई मंदिरों में देखी जाती है।`,
      image:
        "https://tse1.explicit.bing.net/th?id=OIP.hCwRUsItGAc_7jnMMPfeUgHaEo&pid=Api&P=0&h=180",
    },
    Y: {
      letter: "Y",
      heading: "Y is for Yoga.",
      subheading: "Yoga का अर्थ है गतिविधियाँ। ",
      text1: `जैन धर्म के अनुसार हम तीन अलग-अलग तरीकों से योग करते हैं। हम शारीरिक, मौखिक या मानसिक तरीकों से योग करते हैं। इसका मतलब है कि हम हर समय योग कर रहे हैं। हमारी सभी गतिविधियाँ अच्छी या बुरी हमारी आत्मा में कर्म लाती हैं। इसलिए हमें अपनी गतिविधियों पर नियंत्रण रखना चाहिए। हम जो करते हैं उस पर ध्यान देकर हम ऐसा कर सकते हैं। शारीरिक योग को नियंत्रित करना आसान है, लेकिन मौखिक योग को नियंत्रित करना कठिन है और मानसिक योग को नियंत्रित करना सबसे कठिन है। इसलिए, जब आप कुछ करना चाहते हैं तो सावधान रहें और सुनिश्चित करें कि आप कुछ भी बुरा नहीं कर रहे हैं, कह नहीं रहे हैं या सोच नहीं रहे हैं।`,
      text2: `जैन धर्म में योग और ध्यान दो अलग चीजें हैं।`,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.5ZZwt_iIVS48VpFOfnn1hgAAAA&pid=Api&P=0&h=180",
    },
    Z: {
      letter: "Z",
      heading: "Z is for Zero Possessions",
      subheading:
        "Zero Possessions का अर्थ है कुछ भी न रखने और सांसारिक वस्तुओं से पूरी तरह से अलग होने का आदर्श जैन धर्म में एक केंद्रीय अवधारणा है, जो आंतरिक शुद्धता और अनासक्ति को बढ़ावा देता है।",
      text1: `शून्य कब्ज़ा, भौतिक संपत्ति और सांसारिक लगाव से पूर्ण अलगाव पर जोर देता है। जैनियों का मानना है कि संपत्ति के प्रति अत्यधिक लगाव इच्छाओं को जन्म देता है, जो बदले में आत्मा को जन्म और मृत्यु के चक्र में बांध देता है। संपत्ति का त्याग करके, व्यक्ति स्वयं को कर्म के चंगुल से मुक्त करते हैं और आध्यात्मिक प्रगति का मार्ग प्रशस्त करते हैं। यह प्रथा भौतिक संपदा से परे फैली हुई है और इसमें भावनात्मक और मनोवैज्ञानिक जुड़ाव भी शामिल है। शून्य संपत्ति की खोज के माध्यम से, जैन आंतरिक समता की स्थिति के लिए प्रयास करते हैं, जहां उनकी खुशी और भलाई बाहरी कारकों पर निर्भर नहीं होती है।`,
      text2: `शून्य संपत्ति भौतिक संपदा की नश्वरता और आंतरिक संतुष्टि के महत्व की गहन याद दिलाती है। आसक्तियों को त्यागकर, जैन आंतरिक समृद्धि की भावना पैदा करना चाहते हैं, अपनी आध्यात्मिक यात्रा के साथ गहरा संबंध और अस्तित्व की प्रकृति की गहरी समझ को बढ़ावा देते हैं।`,
      image:
        "https://tse2.mm.bing.net/th?id=OIP._fl4OuQZ_-SJ0fP4_nY7IgEgDY&pid=Api&P=0&h=180",
    },
  };

  const handleClick = (letter) => {
    if (facts.hasOwnProperty(letter)) {
      setSelectedLetter(letter);
    } else {
      setSelectedLetter(null);
    }
  };

  return (
    <>
      <div className="apliosis">
        <main className="mainhu">
          <header className="Iamhedr">
            <h1>Alphabet Facts</h1>
          </header>
          <ul className="listGroupss">
            {alphabet.map((letter) => (
              <li key={letter} onClick={() => handleClick(letter)}>
                <button className="leTTERclassING">{letter}</button>
              </li>
            ))}
          </ul>
          <div
            className={`fact-modal-wrapper ${selectedLetter ? "active" : ""}`}
          >
            <div className="modal-card">
              {selectedLetter && (
                <>
                  <div className="modal-content" style={{ overflow: "auto" }}>
                    <img
                      className="letter-image"
                      src={facts[selectedLetter].image}
                      alt={facts[selectedLetter].letter}
                    />
                    <div className="modal-text" style={{ overflow: "auto" }}>
                      <h1>{facts[selectedLetter].letter}</h1>

                      <h2
                        style={{
                          fontSize: "27px",
                        }}
                      >
                        {facts[selectedLetter].heading}
                      </h2>
                      <h3
                        style={{
                          fontSize: "23px",
                        }}
                      >
                        {facts[selectedLetter].subheading}
                      </h3>
                      <p
                        style={{
                          overflow: "auto",
                          padding: "20px",
                        }}
                      >
                        {facts[selectedLetter].text1}
                      </p>
                      <p
                        style={{
                          overflow: "auto",
                          padding: "20px",
                        }}
                      >
                        {facts[selectedLetter].text2}
                      </p>
                    </div>
                  </div>
                  <button
                    className="leTTERclassING"
                    id="closeModal_btn"
                    onClick={() => setSelectedLetter(null)}
                  >
                    X
                  </button>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Alphabets;
