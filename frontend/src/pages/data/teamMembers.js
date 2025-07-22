// import kyle from "../../assets/kyle.png";
// import christina from "../../assets/christina.png";
// import janette from "../../assets/janette.png";
// import dante from "../../assets/dante.png";
// import mo from "../../assets/mo.png";
// import caleb from "../../assets/caleb.png";
// import charles from "../../assets/charles.png";
// import timnit from "../../assets/timnit.png";
// import derek from "../../assets/derek.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Kyle A. Darby, Sr",
    position: "Co-Founder, ex-officio",
    description: `Kyle A. Darby is a lobbyist and political strategist based in
Philadelphia. He is the President and CEO of Darby Public
Strategies, a bipartisan consulting firm specializing in government
relations, business advisory, and political consultation services.
Throughout his career, Darby has assisted clients in various
industries, including real estate and development, healthcare, social
and environmental justice, entertainment, professional sports,
cannabis, cybersecurity, transportation, digital connectivity, and
logistics. Kyle gained experience working in the U.S. Senate before
serving as a senior adviser to many lobbying firms in the Northeast
United States, including national law firm Buchanan Ingersoll &
Rooney’s federal and multi-state government relations practice.
Due to his expertise on both sides of the aisle and throughout the
country, Kyle led government relations for Reform Alliance in eight
states and in coordination with the White House in 2019 before
launching his firm. Kyle has also worked on pre-feasibility studies
for smart-city infrastructure implementation in the Horn of Africa,
particularly Ethiopia, since 2016.
Kyle earned a B.A. in political science from Stockton University, an
M.A. in public policy from Temple University, and an Executive
Education Certificate in strategic leadership from the Harvard
Kennedy School of Government at Harvard University.`,
    // image: kyle,
  },
  {
    id: 2,
    name: "CHRISTINA JOLLEY",
    position: "Co-Founder, ex-officio",
    description: `Christina is the CEO of Black Archetype, a Foreign Relations firm
specializing in African Affairs. She is a seasoned advocate for the
private sector, facilitating bilateral and multilateral trade between
African nations and the West. Christina represents clients in key
sectors such as Primary Healthcare, Cybersecurity & Technology for
Peace and Security, Fintech and Agritech. Her work spans these
industries, including mining, oil and gas, driving transformative
initiatives that foster economic growth, sustainability, and strategic
partnerships across the African continent.
Christina holds a BFA from the University of Connecticut, an MBA
from Walden University, and a Master’s in International Studies
from SOAS, University of London. She is also a GIA-certified
diamontologist trained at the Harry Oppenheimer Diamond
Training School. With expertise in market research, pre-feasibility
studies, and due diligence in Sierra Leone, Ghana, Senegal, Angola,
and South Africa, she effectively navigates governmental and
organizational landscapes. Christina leverages diplomacy and
private-sector engagement to align state and organizational
priorities, fostering sustainable development and economic
progress.`,
    // image: christina,
  },
  {
    id: 3,
    name: "DR. JANETTE YARWOOD",
    position: "Board Member",
    description: `Janette Yarwood is the Director for Africa and The Middle East at
the Office of International Affairs at Yale University. She earned
her PhD in Anthropology from The Graduate Center, City
University of New York. Before joining Yale, Dr. Yarwood worked
in Washington D.C. on various roles related to U.S. policy
towards Africa. She was Senior Advisor to the Assistant Secretary
of African Affairs at the Department of State, focusing on
strategic initiatives and policy priorities for the region. She also
served as Staff Director of the House Subcommittee on Africa,
Global Health, Global Human Rights, and International
Organizations, where she managed foreign policy agendas,
organized congressional hearings and delegations, and liaised
with entities like the White House and State Department. At the
Foreign Service Institute, she led the Sub-Saharan Africa Area
Studies program, designing curriculum and training diplomats.
She has taught at George Washington University's Elliott School
of International Affairs and contributes as an expert to the United
States Institute for Peace's Sahel Senior Study Group. As a
Fulbright scholar, her work centers on democratization,
governance, human rights, and the role of youth-led movements
and arts in activism.`,
    // image: janette,
  },
  {
    id: 4,
    name: "DR. DANTE SIMPSON",
    position: "Board Member",
    description: `Dr. Dante Simpson is a seasoned executive with extensive
experience in sports marketing, technology, entertainment, and
fashion. He currently serves as the Chief Executive Officer of
ESPAT TV, a creative collective specializing in immersive gaming
culture and web3 experiences. Additionally, he is the co-founder
of SPAT Media, a company innovating in digital imagery through
proprietary software that converts static images into interactive
assets. Dr. Simpson's prior roles include leading DSA Media
Group as CEO, managing a $20 million sports and entertainment
marketing portfolio, and holding key marketing positions at
Rashan Gary Sports, Aesthetics Medical, and Eon Interactive.
Dante also founded The Table television show at the New York
Stock Exchange, interviewing “cultural rule breakers” and
trailblazers of industry.
He holds a Master's degree in Entrepreneurship &
Innovation/Marketing from NYU Stern School of Business and a
Bachelor's degree in Marketing and Finance from The Ohio State
University.`,
    // image: dante,
  },
  {
    id: 5,
    name: "MO RUSHDY",
    position: "Board Member",
    description: `Mohamed "Mo" Rushdy began his construction engineering
career while earning his Master’s at The American University in
Cairo, working on Egypt’s first cement plant in Sinai. He then
moved to Kuwait to participate in the construction of the country's
first Olympic stadium. In 2004, Rushdy joined Toll Brothers in the
U.S., progressing from trainee to Project Manager and managed
projects such as Philadelphia’s Naval Square. In 2007, he became
General Manager at Westrum Development, overseeing projects
until the financial crash of 2008. Afterwards, he co-founded The
Riverwards Group with Larry McKnight, initially focusing on small
infill developments in Philadelphia’s Fishtown neighborhood. The
firm has completed over 60 projects and delivered nearly 500
homes, with plans for 750 more in the future. Rushdy has also
engaged in an international project along the coast of Cairo,
Egypt in collaboration with NBA Africa. Recognized within the
industry, Rushdy has been featured in various publications and
was included in the Philadelphia Business Journal’s "40 Under 40."
He holds positions as Vice President of the Building Industry
Association, Chairman of the Philadelphia Accelerator Fund, and
member of the Mayor’s Housing Advisory Committee.`,
    // image: mo,
  },
  {
    id: 6,
    name: "CALEB ADEBAYO",
    position: "Board Member",
    description: `Caleb is an Associate in the Securitization and Structured Finance
team at Linklaters LLP, New York, specializing in cross-border
asset-backed securities. His work focuses on innovative financing
solutions in Finance, ESG, and Clean Energy to support
sustainable development in Africa and emerging markets.
Caleb founded Earthplus in 2015, an environmental nonprofit
promoting sustainable policies across Africa. He is a recipient of
several awards, including the Obama YALI Fellowship, US
Carrington Youth Fellowship, and the JCI Ten Outstanding Young
Persons award for Moral and Environmental Leadership. He has
spoken at key international forums, including the African Union
AGYI Forum and Climate Tracker training in Addis Ababa, and
was recognized by This Day newspaper as a notable lawyer.
An alumnus of NYU School of Law and Obafemi Awolowo
University, Caleb is also affiliated with Lagos Business School and
serves on the Editorial Board of SFJournal, a leading structured
finance publication. Caleb is happily married to his sweetheart,
Uzoma.`,
    // image: caleb,
  },
  {
    id: 7,
    name: "CHARLES CARITHERS",
    position: "Board Member",
    description: `Charles Carithers joined Cornerstone in 2020 after working as
Professional Staff for the House Committee on Homeland
Security, where he advised Chairman Bennie Thompson on
national security and intelligence matters. With 11 years of
experience in the U.S. Intelligence Community, he held leadership
positions at IARPA and ODNI, contributing to national security
policies. He also served as a Brookings Institution Legislative
Fellow in the Senate. Charles participates in national security and
foreign policy circles, serving on multiple advisory boards,
including the UNCF Leadership Council and the Council on
Foreign Relations. He has received several defense awards and is
an Adjunct Professor at Georgetown University, teaching U.S.
national security policy.
Charles holds a B.A. from Morehouse College and an M.S. from
the Harvard Kennedy School of Government, and teaches a
graduate-level course on Congress and U.S. national security
policy at Georgetown University.`,
    // image: charles,
  },
  {
    id: 8,
    name: "TIMNIT ABRAHA",
    position: "Board Member",
    description: `Timnit Abraha is a real estate professional with over 15 years of
experience in large-scale development. She joined the University
City Science Center as Vice President of Real Estate in February
2022, leading the development of University City Square's 8.0
million square feet of mixed-use space. Previously, Timnit was
Director at Harvard University, managing 3.4 million square feet
across 94 buildings and overseeing all commercial real estate
transactions in Cambridge. She has also been an Asset
Management Consultant for the United Nations, Director of Real
Estate for Teach for America, and Asset Manager for Columbia
University Real Estate.
Timnit speaks three languages, holds an M.S. from Columbia
University, and is passionate about coffee.`,
    // image: timnit,
  },
  {
    id: 9,
    name: "Derek S. Green, Esquire",
    position: "Of Counsel",
    description: `Derek S. Green is a former Councilman At-Large for the City of Philadelphia. He has extensive litigation experience, including handling contract disputes, corporate transactions, and negotiating intergovernmental agreements.

As a member of City Council, Councilman Green chaired the Committee on Disabilities and served as the Vice Chair of the Committees on Aging and Law and Government. Additionally, he served as the Chairman of the Philadelphia Gas Commission, Board Director for the Philadelphia Cultural Fund, Board Director for the Democratic Municipal Officials, Regional Director for the National Black Caucus of Local Elected Officials, and a Board Member for the Pennsylvania Municipal League.

Due to his challenging schedule as an elected official and a practicing attorney, Derek doesn’t have a lot of free time. However, he does enjoy early morning exercise as a way to unwind and relieve stress. Derek recently completed his first Broad Street Run and his first Dad Vail Regatta.

`,
    // image: derek,
  },
];

export default teamMembers;
