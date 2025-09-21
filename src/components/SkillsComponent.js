import React from "react";
import {
	Box,
	Typography,
	Chip,
} from "@mui/material";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faNodeJs,
	faAws,
	faGitAlt,
	faAndroid,
	faFigma,
	// If you have a paid license or know the specific icons for others, import them here
} from "@fortawesome/free-brands-svg-icons";

import {
	faCircle,
	faLaptopCode,
	faCode,
} from "@fortawesome/free-solid-svg-icons";

// 1. Map each skill to the appropriate icon. For any skill without an exact match,
//    you can fallback to faCircle or another icon you prefer.
const skillIcons = {
	"React": faReact,
	"React Native": faReact,        // or keep the same React icon
	"Node.js": faNodeJs,
	"Express": faNodeJs,            // no separate Express icon; reuse faNodeJs or something else
	"AWS": faAws,
	"Git": faGitAlt,
	"GitHub": faGitAlt,             // same icon for GitHub or find an alternative
	"Postman": faLaptopCode,            // fallback icon; Font Awesome doesn't have a free Postman icon
	"Android Studio": faAndroid,    // for Android platform
	"Figma": faFigma,               // available in free brand icons
	"Canva": faCircle,              // fallback icon; no free brand icon for Canva
	"VS Code": faCode,
};

// 2. Adjust the data structure to group your skills into relevant categories.
const skillsData = {
	skills: [
		{
			id: 1,
			category: "Frontend & Design",
			items: ["React", "React Native", "Figma", "Canva"],
		},
		{
			id: 2,
			category: "Backend & Server",
			items: ["Node.js", "Express"],
		},
		{
			id: 3,
			category: "Tools & Platforms",
			items: ["AWS", "Git", "GitHub", "Postman", "Android Studio", "VS Code"],
		},
	],
};

const SkillsComponent = () => {
	// Flatten all skill items from each category
	const allSkills = skillsData.skills.flatMap((skill) => skill.items);

	return (
		<Box
			sx={{
				p: { xs: 2, sm: 4 },
				textAlign: "left",
				backgroundColor: "#efefef",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					width: "100%",
					textAlign: "center",
					marginBottom: "20px",
					"&::after": {
						content: '""',
						display: "block",
						width: "60px",
						height: "3px",
						backgroundColor: "#748D92",
						margin: "8px auto 0",
					},
				}}
			>
				My Skills
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
					justifyContent: "center",
					width: {
						sm: "100%",
						lg: "80%",
					},
				}}
			>
				{allSkills.map((item, index) => (
					<Chip
						key={index}
						label={
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: 1,
								}}
							>
								<FontAwesomeIcon
									icon={skillIcons[item] || faCircle}
									size="3x"
								/>
								<Typography
									sx={{ textAlign: "center", fontSize: "20px" }}
								>
									{item}
								</Typography>
							</Box>
						}
						variant="outlined"
						color="default"
						sx={{
							borderRadius: "8px",
							minWidth: "120px",
							minHeight: "120px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "transparent",
							borderColor: "#124E66",
							color: "#124E66",
							cursor: "pointer",
							transition: "background-color 0.3s, color 0.3s",
						}}
					/>
				))}
			</Box>
		</Box>
	);
};

export default SkillsComponent;
