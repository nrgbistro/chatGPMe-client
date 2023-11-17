import { NextPage } from "next";
import React from "react";
import { getUserProfileData } from "@/lib/profile.service";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Profile: NextPage = withPageAuthRequired(
	async () => {
		const user = await getUserProfileData();

		return (
			<div className="content-layout">
				<h1 id="page-title" className="content__title">
					Profile Page
				</h1>
				<div className="content__body">
					<p id="page-description">
						<span>
							<strong>Only authenticated users should access this page.</strong>
						</span>
					</p>
					<div className="profile-grid">
						<div className="profile__header">
							<div className="profile__headline">
								<h2 className="profile__title">{user.name}</h2>
								<span className="profile__description">{user.email}</span>
							</div>
						</div>
						<div className="profile__details"></div>
					</div>
				</div>
			</div>
		);
	},
	{ returnTo: "/profile" }
);

export default Profile;
