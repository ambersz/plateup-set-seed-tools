import version from "../workers/db/version.txt";
const Version = () => {
	return <div>`Game Data from version ${version}`;</div>;
};
export default Version;
