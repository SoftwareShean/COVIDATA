import axios from "axios";

export const stateData = async () => {
  const stateUrl = `https://api.covidtracking.com/v1/states/current.json`;
  try {
    const response = await axios.get(stateUrl);
    let stateList = response.data;
    return stateList
  } catch (error) {
    alert(`Err. ${error}`);
  }
};

export const stateArray = (index) => {
  let img = [
    {
      state: "ALASKA",
      outline: "https://i.imgur.com/C58GrJF.png",
      governor: "Mike Dunleavy",
    },
    {
      state: "ALABAMA",
      outline: "https://i.imgur.com/jcKPoJI.png",
      governor: "Kay Ivey",
    },
    {
      state: "ARKANSAS",
      outline: "https://i.imgur.com/gPLuIx1.png",
      governor: "Asa Hutchinson",
    },
    {
      state: "AMERICAN SAMOA",
      outline: "https://i.imgur.com/o38cxwj.png",
      governor: "Lolo Matalasi Moliga",
    },
    {
      state: "ARIZONA",
      outline: "https://i.imgur.com/aFFYYQg.png",
      governor: "Doug Ducey",
    },
    {
      state: "CALIFORNIA",
      outline: "https://i.imgur.com/WVZkxx0.png",
      governor: "Gavin Newsom",
    },
    {
      state: "COLORADO",
      outline: "https://i.imgur.com/aMDsHUi.png",
      governor: "Jared Polis",
    },
    {
      state: "CONNECTICUT",
      outline: "https://i.imgur.com/aBt79tS.png",
      governor: "Ned Lamont",
    },
    {
      state: "DISTRICT OF COLUMBIA",
      outline: "https://i.imgur.com/RoBlzMW.png",
      governor: "Muriel Bowser",
    },
    {
      state: "DELEWARE",
      outline: "https://i.imgur.com/K7tNOzQ.png",
      governor: "John Carney",
    },
    {
      state: "FLORIDA",
      outline: "https://i.imgur.com/Ifps1ma.png",
      governor: "Ron DeSantis",
    },
    {
      state: "GEORGIA",
      outline: "https://i.imgur.com/aMSyQhp.png",
      governor: "Brian Kemp",
    },
    {
      state: "GUAM",
      outline: "https://i.imgur.com/q6dWXFj.png",
      governor: "Lou Leon Guerrero",
    },
    {
      state: "HAWAII",
      outline: "https://i.imgur.com/UbMl0Ri.png",
      governor: "David Ige",
    },
    {
      state: "IOWA",
      outline: "https://i.imgur.com/mrFsQB4.png",
      governor: "Kim Reynolds",
    },
    {
      state: "IDAHO",
      outline: "https://i.imgur.com/RSK6tZa.png",
      governor: "Brad Little",
    },
    {
      state: "ILLINOIS",
      outline: "https://i.imgur.com/PFnmDjr.png",
      governor: "J. B. Pritzker",
    },
    {
      state: "INDIANA",
      outline: "https://i.imgur.com/wmFPINW.png",
      governor: "Eric Holcomb",
    },
    {
      state: "KANSAS",
      outline: "https://i.imgur.com/301QrzY.png",
      governor: "Laura Kelly",
    },
    {
      state: "KENTUCKY",
      outline: "https://i.imgur.com/q801W73.png",
      governor: "Andy Beshear",
    },
    {
      state: "LOUISIANA",
      outline: "https://i.imgur.com/PdNZcI4.png",
      governor: "John Bel Edwards",
    },
    {
      state: "MASSACHUSETTS",
      outline: "https://i.imgur.com/JHfNL0X.png",
      governor: "Charlie Baker",
    },
    {
      state: "MARYLAND",
      outline: "https://i.imgur.com/aDihZDX.png",
      governor: "Larry Hogan",
    },
    {
      state: "MAINE",
      outline: "https://i.imgur.com/tJHr7EI.png",
      governor: "Janet Mills",
    },
    {
      state: "MICHIGAN",
      outline: "https://i.imgur.com/TiwJq8J.png",
      governor: "Gretchen Whitmer",
    },
    {
      state: "MINNESOTA",
      outline: "https://i.imgur.com/e0QjMSF.png",
      governor: "Tim Walz",
    },
    {
      state: "MISOURI",
      outline: "https://i.imgur.com/lmchgKH.png",
      governor: "Mike Parson",
    },
    {
      state: "MARIANA ISLANDS",
      outline: "https://i.imgur.com/mMu93lX.png",
      governor: "Ralph Torres",
    },
    {
      state: "MISSISSIPPI",
      outline: "https://i.imgur.com/UM4G9sb.png",
      governor: "Tate Reeves",
    },
    {
      state: "MONTANA",
      outline: "https://i.imgur.com/WbKE5oJ.png",
      governor: "Steve Bullock",
    },
    {
      state: "NORTH CAROLINA",
      outline: "https://i.imgur.com/r0uGPVT.png",
      governor: "Roy Cooper",
    },
    {
      state: "NORTH DAKOTA",
      outline: "https://i.imgur.com/wAzXP6m.png",
      governor: "Doug Burgum",
    },
    {
      state: "NEBRASKA",
      outline: "https://i.imgur.com/1fIKknQ.png",
      governor: "Pete Ricketts",
    },
    {
      state: "NEW HAMPSHIRE",
      outline: "https://i.imgur.com/nDnRN1v.png",
      governor: "Chris Sununu",
    },
    {
      state: "NEW JERSEY",
      outline: "https://i.imgur.com/Oh588xq.png",
      governor: "Phil Murphy",
    },
    {
      state: "NEW MEXICO",
      outline: "https://i.imgur.com/83IvBEF.png",
      governor: "Michelle Lujan Grisham",
    },
    {
      state: "NEVADA",
      outline: "https://i.imgur.com/bxIfUdI.png",
      governor: "Steve Sisolak",
    },
    {
      state: "NEW YORK",
      outline: "https://i.imgur.com/06uRSIM.png",
      governor: "Andrew Cuomo",
    },
    {
      state: "OHIO",
      outline: "https://i.imgur.com/ENE6Ndb.png",
      governor: "Mike DeWine",
    },
    {
      state: "OKLAHOMA",
      outline: "https://i.imgur.com/TogFcdw.png",
      governor: "Kevin Stitt",
    },
    {
      state: "OREGON",
      outline: "https://i.imgur.com/7y1WlAS.png",
      governor: "Kate Brown",
    },
    {
      state: "PENNSYLVANIA",
      outline: "https://i.imgur.com/841kq23.png",
      governor: "Tom Wolf",
    },
    {
      state: "PUERTO RICO",
      outline: "https://i.imgur.com/6pACGBB.png",
      governor: "Wanda Vazquez Garced",
    },
    {
      state: "RHODE ISLAND",
      outline: "https://i.imgur.com/m5tSSKF.png",
      governor: "Gina Raimondo",
    },
    {
      state: "SOUTH CAROLINA",
      outline: "https://i.imgur.com/oXuhOfn.png",
      governor: "Henry McMaster",
    },
    {
      state: "SOUTH DAKOTA",
      outline: "https://i.imgur.com/TMepvbA.png",
      governor: "Kristi Noem",
    },
    {
      state: "TENNESSEE",
      outline: "https://i.imgur.com/YWu7v2I.png",
      governor: "Bill Lee",
    },
    {
      state: "TEXAS",
      outline: "https://i.imgur.com/OdbRuCN.png",
      governor: "Greg Abbott",
    },
    {
      state: "UTAH",
      outline: "https://i.imgur.com/fLwF6Iw.png",
      governor: "Gary Herbert",
    },
    {
      state: "VIRGINIA",
      outline: "https://i.imgur.com/5Pd2nNV.png",
      governor: "Ralph Northam",
    },
    {
      state: "VIRGIN ISLANDS",
      outline: "https://i.imgur.com/yG0gIIL.png",
      governor: "Albert Bryan",
    },
    {
      state: "VERMONT",
      outline: "https://i.imgur.com/xrSKpXM.png",
      governor: "Phil Scott",
    },
    {
      state: "WASHINGTON",
      outline: "https://i.imgur.com/UUf5eAO.png",
      governor: "Jay Inslee",
    },
    {
      state: "WISCONSIN",
      outline: "https://i.imgur.com/riPZAze.png",
      governor: "Tony Evers",
    },
    {
      state: "WEST VIRGINIA",
      outline: "https://i.imgur.com/P2BRFa3.png",
      governor: "Jim Justice",
    },
    {
      state: "WYOMING",
      outline: "https://i.imgur.com/KSzqep1.png",
      governor: "Mark Gordon",
    },
  ];

  return img[index]
}
