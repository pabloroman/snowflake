export const compiledTracks = 
{
    "SERVER": {
        "displayName": "Servers",
        "category": "Building",
        "description": "Develops expertise in servers, using technologies such as Scala or Node",
        "milestones": [
            {
                "summary": "Works effectively within established server side frameworks, following current best practices",
                "signals": [
                    "Write asynchronous code using futures or another appropriate approach",
                    "Implement an API endpoint in Play using static dependency injection",
                    "Makes minor server changes to support client needs"
                ],
                "examples": [
                    "Increase max page size for moderation endpoint in Discussion API",
                    "Remove unused switch in Frontend",
                    "Catch and log errors from failed CAPI call in Frontend"
                ]
            },
            {
                "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
                "signals": [
                    "Assesses correctness and utility of existing code and avoids blind copy-pasting",
                    "Generalizes code when appropriate",
                    "Determines data needs from product requirements"
                ],
                "examples": [
                    "Upgrade to Play 2.6.7",
                    "Replace Dispatch with Play WS",
                    "Refactor single large (\u2018God\u2019) template in Frontend into separate templates per content type"
                ]
            },
            {
                "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
                "signals": [
                    "Acts as primary maintainer for existing critical systems",
                    "Integrates third party services effectively",
                    "Writes playbooks for new service maintenance"
                ],
                "examples": [
                    "Introduce new server-side A/B testing approach to make it simpler and less risky to introduce new tests",
                    "Writes playbook for Composer to help with 24/7 support",
                    "Implement login via email link in Identity"
                ]
            },
            {
                "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
                "signals": [
                    "Delivers complex systems that achieve their goals",
                    "Avoids subtle architectural mistakes when considering new systems",
                    "Makes appropriate buy vs build choices"
                ],
                "examples": [
                    "Design and build the Grid image service",
                    "Architect and lead on new Avatar API",
                    "TODO"
                ]
            }
        ]
    },
    "CLIENT": {
        "displayName": "Client side",
        "category": "Building",
        "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
        "milestones": [
            {
                "summary": "Works effectively within established client side architectures, following current best practices",
                "signals": [
                    "Makes minor modifications to existing layouts",
                    "Fixes simple design quality issues",
                    "Uses CSS appropriately, following style guide"
                ],
                "examples": [
                    "Update banner copy on frontend",
                    "Add new payment logos to support frontend",
                    "Modify margin on ad-slot commercial container"
                ]
            },
            {
                "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
                "signals": [
                    "Makes sensible abstractions based on template and code patterns",
                    "Specs and builds interactive components independently",
                    "Prototypes simple new features quickly"
                ],
                "examples": [
                    "Convert Frontend relative dates module to ES6 and add flow types",
                    "Add simple lint rules to Frontend codebase",
                    "Implement minor redesign of proposer sidebar"
                ]
            },
            {
                "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
                "signals": [
                    "Provides useful design feedback and suggests feasible alternatives",
                    "Performs systemic tasks to significantly minimise bundle size",
                    "Acts a caretaker for all of web client code"
                ],
                "examples": [
                    "Architect and deliver Pillars on Frontend",
                    "Iterate on new navbar with design/UX and implement",
                    "Migrate Composer text editor from Scribe to Prosemirror"
                ]
            },
            {
                "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
                "signals": [
                    "Pioneers architecture migrations that reduce programmer burden",
                    "Implements complex UI transitions that bring delight",
                    "Makes architectural decisions that eliminate entire classes of bugs"
                ],
                "examples": [
                    "Migrate Frontend codebase to ES6 and introduce type-safety using Flow, promoting use across department",
                    "Implement infinite and fast scroll in the Grid",
                    "Migrate from browserify to webpack"
                ]
            }
        ]
    },
    "INFRASTRUCTURE": {
        "displayName": "Infrastructure",
        "category": "Building",
        "description": "Develops expertise in operations and data storage, including working with AWS and common databases like Postgres and Dynamo",
        "milestones": [
            {
                "summary": "Works effectively within established deployment, monitoring and alerting processes, following current best practices",
                "signals": [
                    "Writes thorough postmortems for service outages",
                    "Makes simple configuration changes to services",
                    "Adds basic monitoring or alerting to services"
                ],
                "examples": [
                    "Add alarm on latency to new Support frontend",
                    "Restrict egress traffic to HTTPS for Content API instances",
                    "Add required configuration to deploy Facia purge lambda using Riffraff"
                ]
            },
            {
                "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
                "signals": [
                    "Made minor version upgrades to technologies",
                    "Makes simple improvement to deployment processes",
                    "Triages service issues correctly and independently"
                ],
                "examples": [
                    "Introduce server side encryption for build artifacts",
                    "Add trivial new role to Amigo",
                    "Change instance type of application to cheaper \u2018t2\u2019 family"
                ]
            },
            {
                "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
                "signals": [
                    "Acts as primary maintainer for existing critical systems",
                    "Designs moderately complex systems",
                    "Migrates key Amigo built images to new Ubuntu version"
                ],
                "examples": [
                    "Introduce automated deployment for Lambda functions in RiffRaff",
                    "Use AWS step functions to manage subscription flow",
                    "Migrate Identity service from Mongo to Postgres/RDS safely"
                ]
            },
            {
                "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
                "signals": [
                    "Designs complex projects that encompass multiple systems and technologies",
                    "Demonstrates deep knowledge of key infrastructure underpinning Guardian systems",
                    "Introduces new databases and technologies to meet underserved needs"
                ],
                "examples": [
                    "Pioneer Thrift and implement for CAPI",
                    "Build Riffraff",
                    "Design and build common AMI baking solution (Amigo)"
                ]
            }
        ]
    },
    "MOBILE": {
        "displayName": "Mobile",
        "category": "Building",
        "description": "Develops expertise in native app development for Android and iOS",
        "milestones": [
            {
                "summary": "Works effectively within established iOS or Android architectures, following current best practices",
                "signals": [
                    "Delivers features requiring simple local modifications",
                    "Adds simple actions that call server endpoints",
                    "Reuses existing components appropriately"
                ],
                "examples": [
                    "Fix a simple crash by adding some error checking",
                    "Parse new JSON fields coming from MAPI",
                    "Add new tracking calls"
                ]
            },
            {
                "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
                "signals": [
                    "Defines new useful and appropriate proto-generated objects",
                    "Creates simple new activities on Android",
                    "Migrates code from old patterns to new patterns"
                ],
                "examples": [
                    "Add a new of view controller/activity (new onboarding, payment screen, settings screen, football article header, etc)",
                    "Add a new type of card or thrasher (e.. onboarding card)",
                    "Upgrade or replace 3rd party dependencies"
                ]
            },
            {
                "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
                "signals": [
                    "Implements complex features with a large product surface area",
                    "Works effectively with Android reactive programming framework",
                    "Adds support for new iOS features after a major iOS version upgrade"
                ],
                "examples": [
                    "Migrate to a new Swift version",
                    "Implement card redesign",
                    "Implement complex UI (such as a new navigation menu)"
                ]
            },
            {
                "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
                "signals": [
                    "Pioneers architecture migration strategies that reduce programmer burden",
                    "Fixes subtle memory management or concurrency issues",
                    "Implements interactive dismissals that bring delight"
                ],
                "examples": [
                    "Implement new tracking architecture throughout the app",
                    "Implement or re-architect complex views and animations (e.g Crosswords, custom UINavigationControllers, etc)",
                    "Successfully introduce Kotlin to Android development and plan migration path"
                ]
            }
        ]
    },
    "COMMUNICATION": {
        "displayName": "Communication",
        "category": "Team Working",
        "description": "Shares the right amount of information with the right people, at the right time, and listens effectively.",
        "milestones": [
            {
                "summary": "Communicates effectively progress and blockers within the team",
                "signals": [
                    "Engages with team discussions",
                    "Raises issues when they come across them",
                    "Communicates their progress clearly to the team"
                ],
                "examples": [
                    "Updates the team on their progress on the new acquisitions banner at team standup",
                    "Asks tech lead for help when master won\u2019t compile on their laptop",
                    "Writes descriptive pull request including a pull request for a new email signup box on the homepage"
                ]
            },
            {
                "summary": "Communicates effectively within wider team and Guardian Digital",
                "signals": [
                    "Choose appropriate communication method (e.g. email, instant message, face to face)",
                    "Communicates effectively with engineers in other teams on cross-team projects",
                    "Clearly articulates the purpose of their work to technical and non-technical colleagues"
                ],
                "examples": [
                    "Emailed Reader Revenue stream distribution list about Zuora outage",
                    "Arranged a meeting for engineers to clarify the cross team technical requirements for collecting marketing consents",
                    "Presented at a reader revenue fortnightly demo"
                ]
            },
            {
                "summary": "Proactively shares information, actively solicits feedback, and facilitates better communication",
                "signals": [
                    "Identifies and resolves miscommunications between others",
                    "Manages project stakeholders expectations effectively",
                    "Seeks input from interested parties before making decisions"
                ],
                "examples": [
                    "Presented a tech-time on Riff-raff",
                    "Drafted team\u2019s weekly update to sponsors",
                    "Solicited feedback from sponsors on new contributions flow"
                ]
            },
            {
                "summary": "Promotes good communication between technical and non-technical colleagues inside and outside Guardian Digital",
                "signals": [
                    "De-escalates tense communications",
                    "Identifies and clarifies ambiguous direction and strategy for others",
                    "Communicates project risk and tradeoffs with nuance",
                    "Promotes good meeting culture"
                ],
                "examples": [
                    "Presented a talk on Quality at the Guardian at an external conference",
                    "Introduced Guardian-digital wide incident log",
                    "Worked with editorial to identify the key requirements of the platform for investigations"
                ]
            }
        ]
    },
    "PROJECT_MANAGEMENT": {
        "displayName": "Project Management",
        "category": "Team Working",
        "description": "Works to deliver good solutions on time",
        "milestones": [
            {
                "summary": "Understands personal capabilities",
                "signals": [
                    "Shows a clear commitment to deliver on time",
                    "Balances team delivery with other departmental activities",
                    "Avoids expanding the scope of a solution unnecessarily"
                ],
                "examples": [
                    "Moves card that they are working on into Doing on the Trello board",
                    "Keeps pull request changesets small",
                    "Delivered new email signup feature within estimated timeframe"
                ]
            },
            {
                "summary": "Ensures that working on the correct thing",
                "signals": [
                    "Questions and understands the importance of work before starting on it",
                    "Balances pragmatism and polish appropriately",
                    "Breaks down large tasks into smaller milestones"
                ],
                "examples": [
                    "During team planning, advocates for fixing production tracking bug before adding country selector widget",
                    "Breaks down \u201cImplement Direct Debit\u201d card into smaller cards that can be tackled by multiple engineers",
                    "Uses data to assess the impact of Sentry alert triggered by paypal bug"
                ]
            },
            {
                "summary": "Understands and maximises the delivery capability of the team",
                "signals": [
                    "Delegates tasks to others appropriately",
                    "Removes blockers",
                    "Challenges the purpose and effectiveness of existing processes within own team and helps to make them better."
                ],
                "examples": [
                    "Assigns actions to appropriate people after incident retrospective",
                    "Presses stakeholders to make key decisions to unblock team",
                    "Change retrospectives from monthly to fortnightly so that team can still remember what happened"
                ]
            },
            {
                "summary": "Understands and maximises the delivery capability of a stream",
                "signals": [
                    "Manages dependencies on other projects and teams",
                    "Negotiates resourcing compromises with other teams",
                    "Considers external constraints and business objectives when planning"
                ],
                "examples": [
                    "Attends Digital Weekly blockers/dependencies meeting",
                    "Plans engineering resourcing changes to deal with planned long-term absence",
                    "Identifies the impact of GDPR on meeting business objectives"
                ]
            }
        ]
    },
    "QUALITY": {
        "displayName": "Quality",
        "category": "Team Working",
        "description": "Embodies and promotes practices to ensure excellent quality products and services",
        "milestones": [
            {
                "summary": "Writes well tested code",
                "signals": [
                    "Tests new code thoroughly, both locally and in production",
                    "Writes tests for new features and bug fixes",
                    "Documents their work appropriately"
                ],
                "examples": [
                    "Caught bug in A/B testing framework before it was used for a real test",
                    "Updated the README with A/B testing framework documentation at the same time as adding the framework",
                    "Adds Flow types to minor Frontend javascript module"
                ]
            },
            {
                "summary": "Identifies risk in existing systems and works to reduce risk by increasing the robustness and reliability of codebases",
                "signals": [
                    "Re-factors existing code to make it more testable",
                    "Deletes unnecessary code",
                    "Adds tests for uncovered areas"
                ],
                "examples": [
                    "Requested tests for a PR when acting as reviewer",
                    "Improves usefulness of integration tests for Supporter site by making them less coupled to unreliable payment provider UIs",
                    "Upgrade membership-frontend to supported version of Play"
                ]
            },
            {
                "summary": "Empowers others to improve quality",
                "signals": [
                    "Adds tooling to improve code quality",
                    "Introduces testing frameworks to previously untested codebases",
                    "Provides useful feedback on PRs to encourage others to improve code quality"
                ],
                "examples": [
                    "Introduce \u201cFlow\u201d static type checking for Javascript",
                    "Improve testing of Fastly VCL by deploying the VCL to a non-production Fastly property",
                    "Add update-ami-parameter feature to riff-raff to make it easier to keep production systems up to date"
                ]
            },
            {
                "summary": "Promotes the importance quality across the department",
                "signals": [
                    "Defines policies for engineering that encourage quality work",
                    "Identifies and eliminates single points of failure throughout the organization",
                    "Secures time and resources from organisation to support great quality"
                ],
                "examples": [
                    "Design and build Amiable to help ensure AMIs are up-to-date",
                    "Organise training on swim-laning and other architectural best practices",
                    "Arranged DNS training for wider pool of engineers",
                    "Convinced senior team of the value of SETI role"
                ]
            }
        ]
    },
    "CAREER_DEVELOPMENT": {
        "displayName": "Career Development",
        "category": "Supporting",
        "description": "Provides support to engineers to help them build the career they want.",
        "milestones": [
            {
                "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
                "signals": [
                    "Advocates on behalf and in defense of a group member",
                    "Shares opportunities for improvements and recognises achievements",
                    "Explains appropriate available industry paths"
                ],
                "examples": [
                    "Provided valuable feedback to a colleague",
                    "Discussed career options and areas of interest informally",
                    "Provided insights  about a career at the Guardian in hiring events/ workshops"
                ]
            },
            {
                "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems.",
                "signals": [
                    "Ensure a group member has an appropriate role on their team",
                    "Offers effective career advice to group members, without being prescriptive",
                    "Creates space for people to talk through challenges"
                ],
                "examples": [
                    "Set up and attended regular, constructive 1:1s",
                    "Provided coaching on how to have difficult conversations",
                    "Coached group members on career progression frameworks and best practices."
                ]
            },
            {
                "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves.",
                "signals": [
                    "Discusses paths, and creates plans for personal and professional growth",
                    "Advocates to align people with appropriate roles within organization",
                    "Works with team leads to elevate emerging leaders"
                ],
                "examples": [
                    "Reviewed individual group member progression regularly",
                    "Suggested appropriate group member for a promotion",
                    "Arranged a requested switch of team for a group member"
                ]
            },
            {
                "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example.",
                "signals": [
                    "Manages team transitions smoothly, respecting team and individual needs",
                    "Develops best practices for conflict resolution",
                    "Ensures all group members' roles are meeting their career needs"
                ],
                "examples": [
                    "Completed training on situational leadership",
                    "Built a resourcing plan based on company, team, and individual goals",
                    "Prevented regretted attrition with intentional, targeted intervention"
                ]
            },
            {
                "summary": "Supports the development of a significant part of the engineering org, and widely viewed as a trusted advisor",
                "signals": [
                    "Supports and develops senior leaders",
                    "Identified leadership training opportunities for senior leadership",
                    "Pushes everyone to be as good as they can be, with empathy"
                ],
                "examples": [
                    "Provided coaching to sr. engineers and managers",
                    "Devised Pathwise curriculum for sr. engineers  & managers",
                    "Advocated to execs for engineer development resources and programs"
                ]
            }
        ]
    },
    "PROCESS_ORG_REDESIGN": {
        "displayName": "Process & Org Redesign",
        "category": "Supporting",
        "description": "Defines processes and structures that enables the strong growth and execution of a diverse engineering organization.",
        "milestones": [
            {
                "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve.",
                "signals": [
                    "Reflects on meetings that leave them inspired or frustrated",
                    "Teaches others about existing processes",
                    "Actively participates and makes contributions within organizational processes"
                ],
                "examples": [
                    "Facilitated effective retrospective meeting with empathy",
                    "Explained existing processes to a new hire",
                    "Provided feedback on planning meeting"
                ]
            },
            {
                "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the team.",
                "signals": [
                    "Defines meeting structure and cadence that meets team needs",
                    "Engages in organizational systems thinking",
                    "Advocates for improved diversity and inclusion, and proposes ideas to help"
                ],
                "examples": [
                    "Defined meeting structure for small team",
                    "Improved 24x7 rotation scheduling",
                    "Defined standard channels for inter-team communication"
                ]
            },
            {
                "summary": "Develops processes to solve ongoing organizational problems",
                "signals": [
                    "Creates programs that meaningfully improve organizational diversity",
                    "Solves long-standing organizational problems",
                    "Reallocates resources to meet organizational needs"
                ],
                "examples": [
                    "Developed baseline team templates for consistency",
                    "Created bug-rotation program to address ongoing quality issues",
                    "Defined team\u2019s strategy and mission statement"
                ]
            },
            {
                "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
                "signals": [
                    "Evaluates incentive structures and their effect on execution",
                    "Analyzes existing processes for bias and shortfall",
                    "Ties abstract concerns to concrete organizational actions or norms"
                ],
                "examples": [
                    "Connected mobile recruiting difficulties to focus on excellence",
                    "Raised leadership level change discrepancies",
                    "Analyzed the hiring rubric for false negative potential"
                ]
            },
            {
                "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
                "signals": [
                    "Builds programs to train leadership in desired skills",
                    "Creates new structures that provide unique growth opportunities",
                    "Leads planning and communication for reorgs"
                ],
                "examples": [
                    "Lead efforts to increase number of mobile engineers",
                    "Directed resources to meaningfully improve diversity at all levels",
                    "Built the career progression framework"
                ]
            }
        ]
    },
    "WELLBEING": {
        "displayName": "Wellbeing",
        "category": "Supporting",
        "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes.",
        "milestones": [
            {
                "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
                "signals": [
                    "Keeps confidences unless legally or morally obliged to do otherwise",
                    "Applies the reasonable person principle",
                    "Avoids blame and focuses on positive change"
                ],
                "examples": [
                    "Ensured group members were taking enough vacation",
                    "Put themself in another's shoes to understand their perspective",
                    "Checked in with colleague showing signs of burnout"
                ]
            },
            {
                "summary": "Creates a positive, supportive, engaging team environment for group members",
                "signals": [
                    "Sheds light on other experiences to build empathy and compassion",
                    "Validates ongoing work and sustains motivation",
                    "Proposes solutions when teams get bogged down or lose momentum"
                ],
                "examples": [
                    "Coordinated a small celebration for a project launch",
                    "Connected tedious A|B testing project with overall company goals",
                    "Noted a team without a recent win and suggested some easy quick wins"
                ]
            },
            {
                "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
                "signals": [
                    "Trains team members to separate stimulus from response",
                    "Maintains a pulse on individual and team morale",
                    "Helps group members approach problems with curiosity"
                ],
                "examples": [
                    "Completed training on Work life balance",
                    "Completed training on compromise and negotiation techniques",
                    "Reframed a problem as a challenge, instead of a barrier, when appropriate"
                ]
            },
            {
                "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
                "signals": [
                    "Ensures team environments are safe and inclusive, proactively",
                    "Grounds team member anxieties in reality",
                    "Tracks team retention actively and proposes solutions to strengthen it"
                ],
                "examples": [
                    "Relieved org tension around product direction by providing extra context",
                    "Encouraged group members to focus on what they can control",
                    "Guided people through complex organizational change"
                ]
            },
            {
                "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
                "signals": [
                    "Recognizes and points out narratives when appropriate",
                    "Works to reshape narratives from victimization to ownership",
                    "Increases the psychological safety of the entire team"
                ],
                "examples": [
                    "Converted group member from a problem haver to a problem solver",
                    "Challenged false narrative and redirected to compassion and empathy",
                    "Cultivated and championed a culture of empathy within the entire team"
                ]
            }
        ]
    },
    "COMMUNITY": {
        "displayName": "Community",
        "category": "Supporting",
        "description": "Builds community internally, gives of themself to the team, and champions and extols company values.",
        "milestones": [
            {
                "summary": "Is available and present on current teams, and works to contribute positively to company culture",
                "signals": [
                    "Participates in team activities and offsites",
                    "Treats colleagues with respect",
                    "Joins groups or committees outside regular responsibilities"
                ],
                "examples": [
                    "Joined and actively participated in the client-side group",
                    "Brought a small gift back from vacation for the team",
                    "Participated in daily standup with enthusiasm and humour (at times)"
                ]
            },
            {
                "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture.",
                "signals": [
                    "Makes space for others to participate",
                    "Collaborates with other engineers outside direct responsibilities",
                    "Finds ways to ramp up and engage new hires quickly"
                ],
                "examples": [
                    "Created onboarding bingo",
                    "Changed the dynamic of a dominant conversation to bring shy and introverted people into the discussion",
                    "Volunteered as note taker for a meeting"
                ]
            },
            {
                "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
                "signals": [
                    "Takes on additional responsibilities at short notice",
                    "Pitches in to help other teams hit deadlines, without missing own deadlines",
                    "Uses position to raise difficult issues on someone's behalf"
                ],
                "examples": [
                    "Volunteered for 24/7 rota on a week with a bank holiday",
                    "Started and drove the LGBT resource group",
                    "Stayed positive and improved team morale during period after high attrition"
                ]
            },
            {
                "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
                "signals": [
                    "Goes above and beyond during support, serving the team without complaint",
                    "Implements concrete programs to significantly improve team inclusivity",
                    "Takes on large amounts of tedious grunt work for the team without being asked"
                ],
                "examples": [
                    "Devoted large amount of time to helping outside direct responsibilities",
                    "Refactored legacy code",
                    "Steps in to maintain orphaned system with no clear owner"
                ]
            },
            {
                "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams.",
                "signals": [
                    "Brings separate teams together to build relatedness",
                    "Holds individuals, teams, and leadership accountable to Scott Trust values",
                    "Sets the tone, policy, and goals around maintaining an inclusive company"
                ],
                "examples": [
                    "Organized wine and olive tasting offsite for the whole engineering org",
                    "Devised, delivered and acted on findings from an engineer happiness survey",
                    "Challenged and corrected exclusionary behaviour or policies"
                ]
            }
        ]
    },
    "MENTORING_AND_TRAINING": {
        "displayName": "Mentoring and training",
        "category": "Strengthening",
        "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
        "milestones": [
            {
                "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
                "signals": [
                    "Be available to provide informal support and advice",
                    "Acts as sounding board for peers and more junior members",
                    "Provides sound advice when asked"
                ],
                "examples": [
                    "Helped a new colleague get set up to build dotcom",
                    "Paired with an engineer to help them configure webpack to use it in a new project",
                    "Help a colleague to clarify their thoughts on a problem"
                ]
            },
            {
                "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
                "signals": [
                    "Takes time to explain concepts and best practices",
                    "Asks questions to illuminate concepts, rather than stating them",
                    "Allows others to lead efforts when it will help their development"
                ],
                "examples": [
                    "Shared an article with a team member to help with their growth",
                    "Offered unprompted feedback to help growth, with empathy",
                    "Lead from behind to support someone new to a leadership role"
                ]
            },
            {
                "summary": "Teaches small groups of engineers and contributes to the engineering knowledge in the Guardian",
                "signals": [
                    "Avoids siloing information when it can be usefully shared with others",
                    "Works to increase the bus factor of systems",
                    "Increases the capability of the department"
                ],
                "examples": [
                    "Led a JS school session on Babel",
                    "Wrote a developer blog post on dynamically scaling a website",
                    "Led a 24/7 training session"
                ]
            },
            {
                "summary": "Provide opportunities for others to spread knowledge and support their colleagues",
                "signals": [
                    "Coordinate knowledge sharing events",
                    "Provide mentoring opportunities",
                    "Arrange training for mentors/teachers"
                ],
                "examples": [
                    "Arranged tech time speakers",
                    "Established system for pairing mentors/ees",
                    "Coordinated mentor training workshop"
                ]
            }
        ]
    },
    "EVANGELISM": {
        "displayName": "Evangelism",
        "category": "Strengthening",
        "description": "Promotes the Guardian to the outside world and establishes it as an attractive and thoughtful place to work",
        "milestones": [
            {
                "summary": "Represents the Guardian well externally and influences individuals positively",
                "signals": [
                    "Shares personal and organizational successes with their network",
                    "Attends Guardian events and talks with guests",
                    "Communicates genuine and honest excitement about their work externally"
                ],
                "examples": [
                    "Attends Guardian hosted or external events and talks with guests",
                    "Acts as guide for non-friend visitor to the Guardian office",
                    "Shares a developer blog post or other Guardian content on Facebook"
                ]
            },
            {
                "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
                "signals": [
                    "Takes meaningful action to introduce people to the Guardian",
                    "Joined public Slack group and represented the Guardian appropriately, and well",
                    "Organizes positive small- or medium-sized events that bring people to the Guardian"
                ],
                "examples": [
                    "Volunteered at Silicon Milkroundabout",
                    "Wrote developer blog post on how we do quality and shares it on various networks",
                    "Gave lightning talk at local Scala meetup on monad transformers"
                ]
            },
            {
                "summary": "Works hard to positively influence large groups of people on their views of the Guardian",
                "signals": [
                    "Mentors or participates in a high visibility way in an external organization",
                    "Builds fruitful partnerships with external organizations",
                    "Writes blog posts about the Guardian that receive moderate traffic"
                ],
                "examples": [
                    "Organises Women who Code meetups at the Guardian",
                    "Open source Scribe and write accompanying developer blog post",
                    "Gives talk on Machine Learning  at London Scala Exchange"
                ]
            },
            {
                "summary": "Establishes the Guardian as an great, innovative company and workplace to the whole industry",
                "signals": [
                    "Establishes themself as an industry thought leader who attracts talent",
                    "Publishes material about the Guardian\u2019s organizational or technical innovations",
                    "Leverages significant following to evangelise the Guardian"
                ],
                "examples": [
                    "Acts as client-side \u2018guru\u2019 by speaking at multiple prominent conferences",
                    "Leads in the creation of a new server-side conference (Scale Summit), hosted at the Guardian",
                    "Open-sourced and evangelised BFG Git helper to significant acclaim"
                ]
            }
        ]
    },
    "RECRUITMENT": {
        "displayName": "RECRUITMENT",
        "category": "Strengthening",
        "description": "Strengthening Guardian\u2019s team by bringing in excellent engineers.",
        "milestones": [
            {
                "summary": "Contributes to hiring  and understands how we evaluate candidates",
                "signals": [
                    "Reviews existing network for potential candidates regularly",
                    "Shadows interviews to gain familiarity with process",
                    "Reviews current job postings regularly"
                ],
                "examples": [
                    "Completed interview training",
                    "Set up casual sessions to practice asking questions",
                    "Referred appropriate individuals for open positions"
                ]
            },
            {
                "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
                "signals": [
                    "Uses interview guidelines to provide clear, objective feedback on candidates",
                    "Interviews candidates with empathy and treats them all with respect",
                    "Researches approaches for sourcing candidates and diversifying hiring"
                ],
                "examples": [
                    "Added observable evidence for every evaluation",
                    "Started a monthly brunch for candidates to meet Guardian employees",
                    "Tested a new service for quality and diversity of candidates"
                ]
            },
            {
                "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
                "signals": [
                    "Teaches new interviewers how to interview with empathy",
                    "Models great interview technique and feedback when shadowed",
                    "Reverse shadows trainees and helps calibrate their feedback"
                ],
                "examples": [
                    "Wrote new interview question which meets our question quality criteria",
                    "Brought candidates into our pipeline proactively, with a high conversion rate",
                    "Proposed useful, tangible improvements to the interview process"
                ]
            },
            {
                "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
                "signals": [
                    "Documents subtle cues in interviews that indicate values alignment",
                    "Makes hiring decisions, resolving discrepancies between conflicting reports",
                    "Top-grades candidates and teases out character traits"
                ],
                "examples": [
                    "Planned engineering away day on interview process and training",
                    "Organized and lead Guardian\u2019s presence at a recruitment fair",
                    "Started BME internship program at the Guardian"
                ]
            },
            {
                "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
                "signals": [
                    "Sets the tone, policy and goals around building a diverse, high-quality team",
                    "Identifies and brings in promising acquisitions",
                    "Tracks industry activity, identifying opportunities for critical roles"
                ],
                "examples": [
                    "Talked with a senior candidate over many months to fill a critical role",
                    "Organized efforts around convincing acquired engineers to join and stay",
                    "Set goals, then tracked and reported metrics on team demographics over time"
                ]
            }
        ]
    }
}