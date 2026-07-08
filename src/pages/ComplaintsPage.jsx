import { motion } from "framer-motion";

const POLICY_URL =
  "https://skule.github.io/bylaws/policies/policy-on-complaints.html";

function EmailLink({ email }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-utra-light-purple hover:text-white underline underline-offset-2 transition-colors duration-200"
    >
      {email}
    </a>
  );
}

export default function ComplaintsPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#4F4B60_0%,#6D6886_20%,#575078_34%,#36397E_98%)] min-h-screen text-white pb-20">
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6 mb-12"
        >
          <h1 className="text-[50px] md:text-[60px] font-extrabold gradient-purple-blue leading-tight [font-family:'ProximaNova',sans-serif]">
            Complaints Policy
          </h1>
          <a
            href={POLICY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-utra-gray/50 text-utra-gray hover:bg-utra-light-purple/10 transition-all duration-200 font-bold [font-family:'ProximaNova',sans-serif]"
          >
            View Full EngSoc Policy on Complaints
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        {/* Single policy box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 [font-family:'ProximaNova',sans-serif] text-white/90 leading-relaxed space-y-4"
        >
          <p className="font-bold text-white">On behalf of the Ombudsperson:</p>

          <p>
            As a representative of your affiliated club, it is imperative to
            know that the Ombudsperson, according to Bylaw 2 of the Engineering
            Society:
          </p>

          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              Receives complaints, feedback, opinions, ideas and haikus about
              EngSoc (and its affiliated clubs).
            </li>
            <li>Acts as a whistleblowing option to members with concerns.</li>
            <li>Mediates conflicts among members of EngSoc.</li>
          </ul>

          <p>
            But most importantly, according to the{" "}
            <a
              href={POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-utra-light-purple hover:text-white underline underline-offset-2 transition-colors duration-200"
            >
              Policy on Complaints
            </a>
            ; the Ombudsperson investigates complaints about Project Directors,
            members of Project Directors' teams, or members of an Affiliated
            Club acting in an official capacity for the club.
          </p>

          <p>
            Section 0.3.7 of the Policy on Affiliated Clubs states that
            affiliated clubs must make the Society's Policy on Complaints easily
            accessible to their members.
          </p>

          <hr className="border-white/10" />

          <p>
            <span className="font-bold text-white">Complaints go to: </span>
            <EmailLink email="ombudsperson@g.skule.ca" /> — Ombudsperson,
            neutral third party officer.
          </p>

          <p className="text-white/70 text-sm">
            (Complaints against Ombudsperson go to{" "}
            <EmailLink email="speaker@g.skule.ca" />)
          </p>

          <hr className="border-white/10" />

          <p>
            <span className="font-bold text-white">
              Who can you complain about?:{" "}
            </span>
            Officers, Project Directors (and members of their team), Board of
            Directors members, Affiliated Clubs members
          </p>

          <p>
            <span className="font-bold text-white">
              Reasons for complaints:{" "}
            </span>
            Harassment, sexual violence, defamation, slander, or a failure to do
            their job
          </p>

          <p>
            Or violations of the University of Toronto Code of Student Conduct
            or Standards of Affiliation according to the Policy on Affiliated
            Clubs
          </p>

          <p>
            <span className="font-bold text-white">
              Can they be anonymous:{" "}
            </span>
            Unless your identity as the complainant is necessary for the
            complaint, yes.
          </p>

          <p>
            <span className="font-bold text-white">
              Complaints must include:{" "}
            </span>
            Sufficient detail to begin an investigation.
          </p>

          <hr className="border-white/10" />

          <p className="font-bold text-white">Possible Response:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              No action (lack of proof / actions not considered misconduct /
              actions happened outside the time period of their role)
            </li>
            <li>Offer to mediate a solution</li>
            <li>
              A factual recommendation report is created which is executed
              according to the voting of the relevant executive body (typically
              Club Affiliation Committee / Board of Directors) with care taken
              for privacy.{" "}
              <span className="font-bold text-white">
                The investigator cannot take any executive action on their own
                accord.
              </span>
            </li>
          </ul>

          <hr className="border-white/10" />

          <p className="font-bold text-white">Possible Recommendations:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Recall subject of complaint from their position.</li>
            <li>
              Take steps under the Policy on Affiliated Clubs, section 0.9.
            </li>
            <li>Mandate additional training.</li>
            <li>Require subject of complaint to issue an official apology.</li>
            <li>Escalate matter to campus police.</li>
            <li>Escalate matter to governmental law enforcement.</li>
            <li>Escalate matter to the Office of the Faculty Dean.</li>
            <li>Escalate matter to the Division of Student Life.</li>
            <li>Escalate matter to the Office of the University Provost.</li>
            <li>Amend EngSoc Bylaws and/or Policies.</li>
            <li>
              Take some other specific action, with additional justification for
              such an extraordinary recommendation.
            </li>
            <li>Any combination of the above.</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
