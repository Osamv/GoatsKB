const ARTICLES_DATA = [
  {
    id: 1,
    title: "Main Balance",
    author: "Osama ",
    date: "Sep 29, 2021",
    lastUpdated: "Oct 20, 2025",
    views: 130,
    readTime: "5 min read",
    category: "Managing Account",
    tags: ["Using", "Account", "Balance"],
    excerpt:
      "Learn about the main balance of your Jawwy account and how to manage it effectively.",
    content: {
      definition:
        "It is the main balance of the Jawwy account. It is only found at the account level, not at the SIM or number level. It is used to build, manage (Upgrade/Downgrade) and renew the flexible plan, in addition to buying the different 'add-ons' from the App or My Add-ons on the website.",
      rechargeOptions: [
        "Top-up Sawa cards and EVs (Sawa Electronic Vouchers).",
        "Credit cards (Including Mada cards)..",
        "SAWA Mobile Recharge/ Sadad One Time Payment through bank app/website.",
        "Stc pay.. Apple Pay",
        "Friends or family can recharge on behalf of the customer using Sawa top-up cards through the website (available in English or Arabic, depending on the conversation’s language) by entering the mobile number and recharge voucher PIN. The transaction will be processed as a regular Sawa Card recharge..",
      ],
      businessRules: `
  <h3 style="color:#00000;">Main Balance Business Rules</h3>
  <ul>
    <li><span style="color:#FF6A39;">A- </span> No specific validity as long as the SIM is active.</li>
    <li><span style="color:#FF6A39;">B- </span> Main balance can’t be gifted to another account</li>
    <li><span style="color:#FF6A39;">C- </span> Used for plan management (build/upgrade/downgrade/renew) and buying add-ons (Combo, Pass, Filler, Cards, Codes, PayGo).</li>
    <li><span style="color:#FF6A39;">D- </span> If the only SIM is terminated, balance stays valid for 1 year from termination date..</li>
    <li><span style="color:#FF6A39;">E- </span> To use it within that year, log in and activate a new SIM under the same account.</li>
    <li><span style="color:#FF6A39;">F- </span> After 1 year with no active SIM → balance expires.</li>  

    <li><span style="color:#FF6A39;">Z- </span> Minimum recharge: <strong>10 SAR</strong> – Maximum: <strong>10,000 SAR</strong>.</li>
  </ul>

  <br/>

  <p><strong>* For recharging through a Credit/Mada card:</strong></p>
  <ul>
    
    <li><span style="color:#00000;">1- </span> First-time use → 1 SAR deducted for verification (refunded within 10 days).</li>
    <li><span style="color:#00000;">2- </span> Any amount is acceptable considering the minimum amount is 10 SAR.</li>

    <li><span style="color:#00000;">3- </span> All credit cards are accepted except those issued in: <span style="color:#FF4D4D;">Cuba, Iran, North Korea, Syria, South Sudan, Ukraine</span>.</li>
    <li><span style="color:#00000;">4- </span> If the customer recharges using a non-Saudi credit card, and the transaction is not found on their account, they will be charged a fee of 1 SAR.</li>

  </ul>

  <br/>

  <p><strong> Confirm the card type and country issuer:</strong></p>
  <ul>
    <li> - If it is from one of the <strong><span style="color:#FF4D4D;">Unaccepted </span></strong> countries>> Validate and advise using another card and other recharge methods.</li>
    <li> - If it is <strong>NOT</strong>,follow the process for “Recharged but not reflected (Credit/Mada/Apple Pay)”.</li>


    <li>Sawa cards: available in 15 / 20 / 25 / 30 / 50 / 100 / 200 / 300 SAR.</li>
    <br/>
    <li> *<strong> Apple Pay</strong>, works on iPhone only (not Android)</li>
    <li> * For <strong>Sawa</strong>: The VAT is applied at the time of purchasing the top-up card</li>
    <li> *<strong>VAT</strong>: applied at purchase for Sawa cards; applied on recharge for other methods.</li>
  </ul>
`,

      notabletorecharge: `
        <p>Ensure the Credit/Mada card is valid and has sufficient balance.</p>

        <p><strong>Step one:</strong></p>
        <ul>
          <li><span style="color:#FF6A39;">A - </span> Check ItsOn or customer care (Cash Balance History) for successful transactions.</li>
          <li>Check PayGo balance if the number is 1.0.</li>
        </ul>

        <p><strong>Step two:</strong></p>
        <ul>
          <li><span style="color:#FF6A39;">B - </span> Get a full screenshot of the error.</li>
          <li><span style="color:#FF6A39;">C - </span> Confirm: card type & country, recharge method (App/Website), balance, validity, and correct card details.</li>
          <li><span style="color:#FF6A39;">D - </span> Check if the same card worked before.</li>
          <li><span style="color:#FF6A39;">E - </span> Try another card.</li>
        </ul>

        <p><strong>Step three:</strong></p>
        <ul>
          <li><span style="color:#FF6A39;">F - </span> Inform the customer about other recharge methods.</li>
          <li><span style="color:#FF6A39;">G - </span> Escalate with all the required details.</li>
        </ul>
      `,

      notabletorechargem: `

        <p><strong>Step one:</strong></p>
        <ul>
          <li>- Check ItsOn or customer care portal (Cash Balance History) to see if there is a successful transaction.</li>
          <li>- Do the Validation</li>
        </ul>

        <p><strong>TS / Step two:</strong></p>
        <ul>
          <li>- Confirm recharge method (App/Portal/155#) → ask to try another.</li>
          <li>- Collect: voucher type, full screenshots of error & Sawa card (PIN may be hidden, serial must show).</li>
          <li>- Try redeeming the voucher via ItsOn or customer care to check status.</li>
<br/>
          <li><strong><span style="color: #FF6A39;">Note:</strong> If the customer sends the card photo while hiding the recharge pin only, then it is fine as long as the serial numbers are visible</li>

        
        </ul>

        <p><strong>Step three: If still not working:</strong></p>
        <ul>
          <li>- Inform about other recharge methods.</li>
          <li>- Escalate with MSISDN, card photo, troubleshooting info, system findings, and contact number.</li>
        </ul>
      `,

      jawwybalance: `
        <p>Balance transfer is allowed only if the number is active or recently migrated/porting out <span style="color:#FF4D4D;"> <u>NOT terminated</u> </span></p>

                <p><strong>Step One:</strong></p>

        <ul>
          <li><span style="color:#FF6A39;">A - </span></span>Ask for the STC or Jawwy number (must be under the same ID and active on ItsOn)</li>
          <li><span style="color:#FF6A39;">B - </span> If there’s no related case in SugarCRM, raise a new case</li>

      `,

      stcbalance: `
        <p>After a customer ports their number from STC to Jawwy:</p>

                <p><strong>Step One:</strong></p>

        <ul>
          <li><span style="color:#FF6A39;">A - </span></span>Confirm the number is active, migration is completed (NP activated), and verify STC balance</li>

        <p><strong>Step two:</strong></p>
        <ul>
          <li><span style="color:#FF6A39;">B - </span></span> Ensure both numbers are under the same ID, then raise an L2 case <u> (Request > balance transfer > transfer balance) </u> </li>   
        </ul>
      `,

      rechargerefund: `
        <p><strong>Recharge refund is only allowed if the number is terminated or ported out </strong></p>

        <ul>
          <li><span style="color:#FF6A39;">A - </span></span>Check if the number is inactive and confirm any remaining balance in CRM</li>
          <li><span style="color:#FF6A39;">B - </span>Validate and raise an L2 case</li>
          <br/>

          <h3 style="color:#00000;">Required info for L2 case:</h3>
          <ul>
          </ul>

            <li><span style="color:#FF6A39;">1 - </span> Conversation #</li>

            <li><span style="color:#FF6A39;">2 - </span>The customer want terminated his MSISND or Migrated/Ported out and he want to refund the amount to his bank account </li>

            <li><span style="color:#FF6A39;">2 - </span>MSISDN: </li>

            <li><span style="color:#FF6A39;">3 - </span> last 4 digits of the Iqama/National ID: </li>


            <li><span style="color:#FF6A39;">5 - </span> Customer Name: </li>

            <li><span style="color:#FF6A39;">6 - </span>Contact number:</li>

      `,


      ImportantNotes: `
        <p>Balance transfer is only allowed between numbers under the same customer ID</p>

        <ul>
          <li><span style="color:#FF6A39;">A - </span></span>Priority is always on the Jawwy number, which means the customer is not eligible for transferring the balance if there's another number on the same account</li>
          

      `,


    },
  },

  {
    id: 2,
    title: "Validation Process (Security Questions)",
    author: "System Admin = Osama",
    date: "Oct 4, 2025",
    views: 45200,
    readTime: "3 min read",
    category: "Common Scenarios",
    tags: ["Security", "Validation", "Process"],
    excerpt:
      "Security validation steps to protect your account and verify your identity.",
    content: {
      definition: "Security validation is a .",
      rechargeOptions: [],
      businessRules: ["test."],
    },
  },

  {
    id: 3,
    title: "Local Data Is Not Working",
    author: "تيم الطربات",
    date: "Oct 4, 2025",
    views: 38900,
    readTime: "4 min read",
    category: "Troubleshooting",
    tags: ["Data", "Technical", "Support"],
    excerpt:
      "Quick troubleshooting guide for resolving local data connectivity issues.",
    content: {
      definition:
        "Troubleshooting guide for customers experiencing issues with local data connectivity.",
      rechargeOptions: [],
      businessRules: ["test."],
    },
  },
  {
    id: 4,
    title: "Ownership Transfer",
    author: "تيم خليها على الله ( ابو ليلى و ابو فهد )",
    date: "Feb 15, 2022",
    views: 29400,
    readTime: "6 min read",
    category: "Common Scenarios",
    tags: ["Transfer", "Ownership", "Account"],
    excerpt: "Complete guide to .",
    content: {
      definition: "Process for transferring account ownership .",
      rechargeOptions: [],
      businessRules: ["test."],
    },
  },
  {
    id: 5,
    title: "MSISDN Termination",
    author: "الطربه Team",
    date: "Oct 4, 2025",
    views: 25600,
    readTime: "4 min read",
    category: "Common Scenarios",
    tags: ["Termination", "Number", "Process"],
    excerpt:
      "Understanding the mobile number termination process and implications.",
    content: {
      definition: "Guide for customers .",
      rechargeOptions: [],
      businessRules: ["test."],
    },
  },
  {
    id: 6,
    title: "Tagging Tree",
    author: "System Admin = Osama",
    date: "Dec 12, 2021",
    views: 22100,
    readTime: "3 min read",
    category: "Goats Systems",
    tags: ["System", "Tags", "Organization"],
    excerpt:
      "Learn how the tagging system organizes and categorizes knowledge.",
    content: {
      definition: "Overview of the tagging system .",
      rechargeOptions: [],
      businessRules: ["Tags must follow standard naming conventions."],
    },
  },

  {
    id: 7,
    title: "fdfdfdfdfd",
    author: "System Admin = Osama",
    date: "Dec 12, 2021",
    views: 22100,
    readTime: "3 min read",
    category: "Goats Systems",
    tags: ["System", "Tags", "Organization"],
    excerpt:
      "Learn how the tagging system organizes and categorizes knowledge.",
    content: {
      definition: "Overview of the tagging system .",
      rechargeOptions: [],
      businessRules: ["Tags must follow standard naming conventions."],
    },
  },

  {
    id: 8,
    title: "dededededde",
    author: "System Admin = Osama",
    date: "Dec 12, 2021",
    views: 22100,
    readTime: "3 min read",
    category: "Goats Systems",
    tags: ["System", "Tags", "Organization"],
    excerpt:
      "Learn how the tagging system organizes and categorizes knowledge.",
    content: {
      definition: "Overview of the tagging system .",
      rechargeOptions: [],
      businessRules: ["Tags must follow standard naming conventions."],
    },
  },

  {
    id: 9,
    title: "rerererere",
    author: "System Admin = Osama",
    date: "Dec 12, 2021",
    views: 22100,
    readTime: "3 min read",
    category: "Goats Systems",
    tags: ["System", "Tags", "Organization"],
    excerpt:
      "Learn how the tagging system organizes and categorizes knowledge.",
    content: {
      definition: "Overview of the tagging system .",
      rechargeOptions: [],
      businessRules: ["Tags must follow standard naming conventions."],
    },
  },
];

export default ARTICLES_DATA;
