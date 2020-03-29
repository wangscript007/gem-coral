/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除gemframe官方保留所有法律责任追究！
 * 本软件受国家版权局知识产权以及国家计算机软件著作权保护（登记号：2018SR503328）
 * 不得恶意分享产品源代码、二次转售等，违者必究。
 * Copyright (c) 2020 gemframework all rights reserved.
 * http://www.gemframework.com
 * 版权所有，侵权必究！
 */
package com.gemframework.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.gemframework.mapper.RightMapper;
import com.gemframework.model.entity.po.Right;
import com.gemframework.model.entity.po.Role;
import com.gemframework.model.entity.po.RoleRights;
import com.gemframework.model.enums.MenuType;
import com.gemframework.service.RightService;
import com.gemframework.service.RoleRightsService;
import com.gemframework.service.RoleService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RightServiceImpl extends ServiceImpl<RightMapper, Right> implements RightService {


    @Autowired
    private RightMapper rightMapper;

    @Autowired
    private RoleService roleService;

    @Autowired
    private RightService rightService;

    @Autowired
    private RoleRightsService roleRightsService;

    @Override
    public Set<String> findRightsByRoles(Set<Role> roles) {
        //用户权限列表
        Set<String> rightsSet = new HashSet<>();
        if(roles != null && !roles.isEmpty()){
            for(Role role:roles){
                if(role!=null && role.getId()!= null){
                    QueryWrapper<RoleRights> queryWrapper = new QueryWrapper<>();
                    queryWrapper.eq("role_id",role.getId());
                    List<RoleRights> roleRights = roleRightsService.list(queryWrapper);
                    if(roleRights!=null && !roleRights.isEmpty()){
                        for(RoleRights roleRight:roleRights){
                            if(roleRight!=null && roleRight.getRightId()!=null){
                                Right right = rightService.getById(roleRight.getRightId());
                                if(right!=null && StringUtils.isNotBlank(right.getFlags())){
//                                    rightsSet.add(right.getFlag());
                                    rightsSet.addAll(Arrays.asList(right.getFlags().trim().split(",")));
                                }
                            }
                        }
                    }
                }
            }
        }
        return rightsSet;
    }


    @Override
    public List<Right> findRightsByRolesAndType(Set<String> roleFlags, MenuType type) {
        //用户权限列表
        List<Right> rightsList = new ArrayList<>();
        Set<Role> roles = roleService.findRolesByFlags(roleFlags);
        if(roles != null && !roles.isEmpty()){
            for(Role role:roles) {
                Map<Object,Object> map = new HashMap<>();
                map.put("type",type.getCode());
                map.put("role_id",role.getId());
                rightsList = rightMapper.findRightsByRoleAndType(map);
            }
        }
        return rightsList;
    }
}